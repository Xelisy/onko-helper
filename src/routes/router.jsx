import React from 'react'
import Articles from '../pages/Articles'
import Test from '../pages/TestPages/Test'
import Problems from '../pages/Problems'
import Home from '../pages/Home/Home'
import Contacts from '../pages/Contacts'
import ClinicsLocation from '../pages/ClinicsLocation'
import { Route, Routes } from 'react-router-dom'
import Error from '../pages/Error'
import Authorization from '../pages/Authorization/Authorization'


export default function router() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/test" element={<Test />} />
      <Route path="/problems" element={<Problems />} />
      <Route path="/articles" element={<Articles />} />
      <Route path="/location" element={<ClinicsLocation />} />
      <Route path="/contacts" element={<Contacts />} />
      <Route path="/login" element={<Authorization />} />
      <Route path='*' element={<Error />} />
    </Routes>
  )
}
