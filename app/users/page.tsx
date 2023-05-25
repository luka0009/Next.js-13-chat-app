import EmptyState from '../components/EmptyState';

type Props = {}

const Users = (props: Props) => {
  return (
    <div className="hidden lg:block lg:pl-80 h-full
     bg-gradient-to-br from-blue-900 via-black to-blue-900
     text-sky-400">
      <EmptyState />
    </div>
  );
}
export default Users;