import { useParams, Link } from 'react-router-dom'

// 课程数据
const courses = [
  {
    id: "python-basics",
    name: "Python基础",
    description: "Python编程语言的基础语法和应用",
    content: "本课程将介绍Python编程语言的基础语法、数据类型、控制结构、函数、模块等内容，为后续的数据分析课程打下基础。"
  },
  {
    id: "data-analysis",
    name: "数据分析与应用",
    description: "使用Python进行数据分析的方法和实践",
    content: "本课程将学习使用Python的数据分析库（如pandas、numpy、matplotlib等）进行数据处理、分析和可视化。"
  },
  {
    id: "data-collection",
    name: "数据采集与处理",
    description: "网络数据采集和数据预处理技术",
    content: "本课程将介绍网络爬虫技术、数据采集工具的使用，以及数据清洗、转换、集成等预处理技术。"
  },
  {
    id: "supply-chain-analysis",
    name: "供应链数据分析",
    description: "供应链管理中的数据分析方法",
    content: "本课程将学习供应链管理中的数据分析方法，包括需求预测、库存管理、物流优化等方面的数据分析技术。"
  },
  {
    id: "database-principles",
    name: "数据库原理与应用",
    description: "数据库的基本原理和应用技术",
    content: "本课程将介绍数据库的基本概念、SQL语言、数据库设计、数据库管理等内容，为数据存储和管理打下基础。"
  }
];

const CourseDetail = () => {
  const { id } = useParams<{ id: string }>();
  const course = courses.find(c => c.id === id);

  if (!course) {
    return (
      <div className="pt-20 pb-10 container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-4">课程不存在</h2>
        <Link to="/" className="text-primary hover:underline">返回首页</Link>
      </div>
    );
  }

  return (
    <div className="pt-20 pb-10 container mx-auto px-4">
      <div className="mb-6">
        <Link to="/" className="text-primary hover:underline mb-4 inline-block">← 返回首页</Link>
        <h1 className="text-3xl font-bold mb-2">{course.name}</h1>
        <p className="text-gray-600 mb-6">{course.description}</p>
      </div>
      <div className="bg-white rounded-lg shadow-md p-6 border border-gray-100">
        <h2 className="text-2xl font-bold mb-4">课程内容</h2>
        <p className="text-gray-700">{course.content}</p>
        <div className="mt-8">
          <p className="text-gray-500 italic">后续将补充详细的课程内容...</p>
        </div>
      </div>
    </div>
  )
}

export default CourseDetail