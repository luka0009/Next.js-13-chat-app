import EmptyState from '../components/EmptyState';

type Props = {}

const Users = (props: Props) => {
  return (
    <div className="hidden lg:block lg:pl-80 h-full bg-slate-800 text-sky-400">
      <EmptyState />
    </div>
  );
}
export default Users;