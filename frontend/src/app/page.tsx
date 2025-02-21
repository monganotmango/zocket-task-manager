"use client"

import { useState, useEffect } from "react"
import TaskList from "../components/TaskList"
import TaskForm from "../components/TaskForm"

interface Task {
  id: string
  title: string
  description: string
  status: string
}

export default function Home() {
  const [tasks, setTasks] = useState<Task[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  const API_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:8080"

  useEffect(() => {
    fetchTasks()
  }, [])

  const fetchTasks = async () => {
    try {
      setLoading(true)
      const response = await fetch(`${API_URL}/tasks`)
      if (!response.ok) throw new Error("Failed to fetch tasks")
      const data = await response.json()
      setTasks(data)
      setError(null)
    } catch (error) {
      console.error("Error fetching tasks:", error)
      setError("Failed to load tasks")
    } finally {
      setLoading(false)
    }
  }

  const addTask = async (task: Omit<Task, "id">) => {
    try {
      const response = await fetch(`${API_URL}/tasks`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(task),
      })
      if (!response.ok) throw new Error("Failed to add task")
      fetchTasks()
    } catch (error) {
      console.error("Error adding task:", error)
      setError("Failed to add task")
    }
  }

  const updateTask = async (task: Task) => {
    try {
      const response = await fetch(`${API_URL}/tasks/${task.id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(task),
      })
      if (!response.ok) throw new Error("Failed to update task")
      fetchTasks()
    } catch (error) {
      console.error("Error updating task:", error)
      setError("Failed to update task")
    }
  }

  const deleteTask = async (id: string) => {
    try {
      const response = await fetch(`${API_URL}/tasks/${id}`, { 
        method: "DELETE" 
      })
      if (!response.ok) throw new Error("Failed to delete task")
      fetchTasks()
    } catch (error) {
      console.error("Error deleting task:", error)
      setError("Failed to delete task")
    }
  }

  return (
    <main className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">Task Manager</h1>
      {error && (
        <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-4">
          {error}
        </div>
      )}
      <TaskForm onAddTask={addTask} />
      {loading ? (
        <div className="flex justify-center items-center py-8">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-gray-900"></div>
        </div>
      ) : (
        <TaskList tasks={tasks} onUpdateTask={updateTask} onDeleteTask={deleteTask} />
      )}
    </main>
  )
}