import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import logements from './data/logements.json'
import { Routes, Route } from "react-router-dom"
import AppRouter from "./router/AppRouter"

function App() {
  return <AppRouter />
}

export default App

