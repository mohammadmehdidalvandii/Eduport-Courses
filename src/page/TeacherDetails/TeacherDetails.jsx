import { useState } from 'react';
import HeaderPage from  '../../components/module/HeaderPage/HeaderPage';
import TeacherDetail from '../../components/template/TeacherDetail/TeacherDetail';
import db from '../../data/db.json'
import { useParams } from 'react-router-dom';

function TeacherDetails() {
  const [teachers , setTeachers ] = useState([...db.teachers])

  // get details teacher
  const {id} = useParams()
  const foundTeacher = teachers.find(teacher=> teacher.id == parseInt(id))
  return (
    <>
      <HeaderPage
        title='جزئیات مدرس'
        text='جزئیات مدرس'
      />
      <TeacherDetail
        {...foundTeacher}
      />
    </>
  )
}

export default TeacherDetails