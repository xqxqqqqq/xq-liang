import { Link } from 'react-router-dom'

// 个人信息
const personalInfo = {
  name: "梁晓晴",
  school: "广东科学技术职业学院",
  department: "商学院",
  major: "商务数据分析与应用"
};

// 课程列表
const courses = [
  {
    id: "python-basics",
    name: "Python基础",
    description: "Python编程语言的基础语法和应用"
  },
  {
    id: "data-analysis",
    name: "数据分析与应用",
    description: "使用Python进行数据分析的方法和实践"
  },
  {
    id: "data-collection",
    name: "数据采集与处理",
    description: "网络数据采集和数据预处理技术"
  },
  {
    id: "supply-chain-analysis",
    name: "供应链数据分析",
    description: "供应链管理中的数据分析方法"
  },
  {
    id: "database-principles",
    name: "数据库原理与应用",
    description: "数据库的基本原理和应用技术"
  }
];

const Home = () => {
  return (
    <div className="pt-20 pb-10">
      {/* 个人信息区 */}
      <section className="bg-secondary py-16 mb-10">
        <div className="container mx-auto px-4 text-center">
          <div className="w-32 h-32 mx-auto mb-6 rounded-full bg-primary text-white flex items-center justify-center text-4xl font-bold">
            梁
          </div>
          <h1 className="text-4xl font-bold mb-2">{personalInfo.name}</h1>
          <p className="text-xl text-gray-600 mb-4">
            {personalInfo.school} | {personalInfo.department}
          </p>
          <p className="text-lg text-gray-600">
            {personalInfo.major}
          </p>
        </div>
      </section>

      {/* 课程列表区 */}
      <section className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-center">我的课程</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {courses.map((course) => (
            <Link to={`/courses/${course.id}`} key={course.id}>
              <div className="course-card bg-white rounded-lg shadow-md p-6 border border-gray-100">
                <h3 className="text-xl font-bold mb-2 text-primary">{course.name}</h3>
                <p className="text-gray-600">{course.description}</p>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </div>
  )
}

export default Home