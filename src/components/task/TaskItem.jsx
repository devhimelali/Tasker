import Tag from "./Tag";
export default function TaskItem({ task, onEdit, onDelete, onFavorite }) {
  return (
    <tr className="border-b border-[#2E3443] [&>td]:align-baseline [&>td]:px-4 [&>td]:py-2">
      <td>
        <button onClick={() => onFavorite(task.id)}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="icon icon-tabler icon-tabler-star"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            strokeWidth="2"
            stroke={task.isFavorite ? "yellow" : "currentColor"}
            fill={task.isFavorite ? "yellow" : "none"}
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <path d="M12 17.75l-6.172 3.245l1.179 -6.873l-5 -4.867l6.9 -1l3.086 -6.253l3.086 6.253l6.9 1l-5 4.867l1.179 6.873z" />
          </svg>
        </button>
      </td>
      <td>{task.title}</td>
      <td>
        <div>{task.description}</div>
      </td>
      <td>
        <ul className="flex justify-center gap-1.5 flex-wrap">
          {task.tags.map((tag, index) => (
            <Tag key={index} tag={tag} />
          ))}
        </ul>
      </td>
      <td className="text-center">
        {task.priority === "low" ? (
          <span className="inline-block h-5 whitespace-nowrap rounded-[45px] px-2.5 text-sm capitalize text-[#F4F5F6] bg-green-500">
            Low
          </span>
        ) : task.priority === "medium" ? (
          <span className="inline-block h-5 whitespace-nowrap rounded-[45px] px-2.5 text-sm capitalize text-[#F4F5F6] bg-yellow-500">
            Medium
          </span>
        ) : (
          <span className="inline-block h-5 whitespace-nowrap rounded-[45px] px-2.5 text-sm capitalize text-[#F4F5F6] bg-red-500">
            High
          </span>
        )}
      </td>
      <td>
        <div className="flex items-center justify-center space-x-3">
          <button onClick={() => onDelete(task.id)} className="text-red-500">
            Delete
          </button>
          <button onClick={() => onEdit(task)} className="text-blue-500">
            Edit
          </button>
        </div>
      </td>
    </tr>
  );
}
