import {
  PieChart,
  Pie,
  Cell,
  ResponsiveContainer,
  Legend,
  Tooltip,
} from "recharts";

const DonutChart = ({ data, title }) => {
  const total = data.reduce((sum, item) => sum + item.value, 0);

  return (
    <div style={{ width: "100%", height: 220 }}>
      <ResponsiveContainer>
        <PieChart>
          <Pie
            data={data}
            dataKey="value"
            cx="45%"       
            innerRadius={60}
            outerRadius={80}
          >
            {data.map((item, index) => (
              <Cell key={index} fill={item.color} />
            ))}
          </Pie>
          <text
            x="28%"
            y="45%"
            textAnchor="middle"
            dominantBaseline="middle" 
            className="fs-3 fw-bold"
          >
            {total}
          </text>

          <text
            x="30%"
            y="56%"
            textAnchor="middle"
            dominantBaseline="middle" 
            className="fs-6"
        
          >
            {title}
          </text>

          <Tooltip />
          <Legend
            layout="vertical"
            verticalAlign="middle"
            align="right"
            iconType="circle"
          />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
};

export default DonutChart;
