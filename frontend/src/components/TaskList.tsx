import type React from "react"

interface Task {
  id: string
  title: string
  description: string
  status: string
}

interface TaskListProps {
  tasks: Task[] | null
  onUpdateTask: (task: Task) => void
  onDeleteTask: (id: string) => void
}

const TaskList: React.FC<TaskListProps> = ({ tasks, onUpdateTask, onDeleteTask }) => {
  if (!tasks || tasks.length === 0) {
    return <p className="text-gray-500 text-center">No tasks added yet.</p>
  }

  return (
    <ul className="space-y-4">
      {tasks.map((task) => (
        <li key={task.id} className="bg-white shadow rounded-lg p-4">
          <h3 className="text-lg font-semibold">{task.title}</h3>
          <p className="text-gray-600">{task.description}</p>
          <p className="text-sm text-gray-500 mt-2">Status: {task.status}</p>
          <div className="mt-4 space-x-2">
            <button
              onClick={() => onUpdateTask({ ...task, status: "completed" })}
              className="bg-green-500 text-white px-3 py-1 rounded"
            >
              Complete
            </button>
            <button
              onClick={() => onDeleteTask(task.id)}
              className="bg-red-500 text-white px-3 py-1 rounded"
            >
              Delete
            </button>
          </div>
        </li>
      ))}
    </ul>
  )
}

export default TaskList
