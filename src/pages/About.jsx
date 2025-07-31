import { useEffect, useState } from 'react';

function About() {
  const [visitCount, setVisitCount] = useState(0);

  useEffect(() => {
    // 示范useEffect的使用
    const count = parseInt(localStorage.getItem('visitCount') || '0');
    setVisitCount(count + 1);
    localStorage.setItem('visitCount', (count + 1).toString());

    return () => {
      // 清理函数示例
      console.log('About页面卸载');
    };
  }, []);

  return (
    <div>
      <h1>关于页面</h1>
      <p>这是一个用于学习React基础概念的示例项目。</p>
      <p>你已经访问此页面 {visitCount} 次。</p>
      
      <div style={{ marginTop: '2rem' }}>
        <h2>项目特点：</h2>
        <ul>
          <li>使用React Router进行路由管理</li>
          <li>使用useState管理组件状态</li>
          <li>使用useEffect处理副作用</li>
          <li>组件之间的通信</li>
          <li>表单处理和事件绑定</li>
        </ul>
      </div>
    </div>
  );
}

export default About;