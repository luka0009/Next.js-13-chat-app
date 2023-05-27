"use client";
import { useEffect, useRef, useState } from "react";
import { FullMessageType } from "@/app/types";
import useConversation from "@/app/hooks/useConversation";
import MessageBox from "./MessageBox";
import axios from "axios";
import { pusherClient } from "@/app/libs/pusher";
import { find } from "lodash";

type Props = {
  initialMessages: FullMessageType[];
};

const Body: React.FC<Props> = ({ initialMessages }) => {
  const [messages, setMessages] = useState(initialMessages);
  const bottomRef = useRef<HTMLDivElement>(null);

  const { conversationId } = useConversation();

  useEffect(() => {
    axios.post(`/api/conversations/${conversationId}/seen`);
  }, [conversationId]);

  useEffect(() => {
    pusherClient.subscribe(conversationId);
    bottomRef?.current?.scrollIntoView();

    const sendMessageHandler = (message: FullMessageType) => {
      setMessages((current) => {
        if (find(current, { id: message.id })) {
          return current;
        }

        return [...current, message];
      });

      bottomRef?.current?.scrollIntoView();
      axios.post(`/api/conversations/${conversationId}/seen`);
    };

    const updateMessageHandler = (newMessage: FullMessageType) => {
      setMessages((current) => current.map((currentMessage) => {
        if(currentMessage.id === newMessage.id) {
          return newMessage;
        };

        return currentMessage;
      }))
    }

    pusherClient.bind("messages:new", sendMessageHandler);
    pusherClient.bind('message:update', updateMessageHandler)

    return () => {
      pusherClient.unsubscribe(conversationId);
      pusherClient.unbind("messages:new", sendMessageHandler);
      pusherClient.unbind("message:update", updateMessageHandler);
    };
  }, [conversationId]);

  return (
    <div className="flex-1 overflow-y-auto">
      {messages.map((message, index) => (
        <MessageBox
          isLast={index === messages.length - 1}
          key={message.id}
          data={message}
        />
      ))}
      <div ref={bottomRef} className="pt-24" />
    </div>
  );
};

export default Body;
