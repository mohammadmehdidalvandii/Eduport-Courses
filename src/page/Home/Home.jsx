import HomeTitle from "../../components/template/home/HomeTitle/HomeTitle"
import CardCredit from "../../components/template/home/CardCredit/CardCredit"
import HomePopular from "../../components/template/home/HomePopular/HomePopular"
import HomeTeacher from "../../components/template/home/HomeTeacher/HomeTeacher"
import HomeFestival from "../../components/template/home/HomeFestival/HomeFestival"
import HomeComment from "../../components/template/home/HomeComment/HomeComment"

function Home() {
  return (
    <>
    <HomeTitle/>
    <CardCredit/>
    <HomePopular/>
    <HomeTeacher/>
    <HomeFestival/>
    <HomeComment/>
    </>
  )
}

export default Home