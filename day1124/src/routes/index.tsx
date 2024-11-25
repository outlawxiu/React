import Exam from '../pages/exam/exam'
import WrongBook from '../pages/wrongBook/wrongBook'

const routes = [
  {
    path:"/",
    element:<Exam></Exam>
  },
  {
    path:"/wrong",
    element:<WrongBook></WrongBook>
  }
];

export default routes
