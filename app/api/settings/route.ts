import getCurrentUser from "@/app/actions/getCurrentUser";
import { NextResponse } from "next/server";
import prisma from '@/app/libs/prismadb';

export async function POST(request: Request) {
    try {
        const currentUser = await getCurrentUser();
        const body = await request.json();
        const { name, image } = body;

        if(!currentUser?.id) {
            return new NextResponse("Anauthorized", { status: 401 });
        };

        const updatedUser = await prisma.user.update({
            where: {
                id: currentUser.id
            },
            data: {
                name: name,
                image: image,
            }
        });

        return NextResponse.json(updatedUser);
    } catch (error: any) {
        console.log(error, 'settings route error');
        return new NextResponse('Internal error', { status: 500 });
    }
}