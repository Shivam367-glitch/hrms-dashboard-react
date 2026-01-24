import { useMediaQuery } from "react-responsive";
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
  const isLaptop = useMediaQuery({ maxWidth: 1300 });
  return (
      <ResponsiveContainer className="charts">
        <PieChart>
         <Pie
  data={data}
  dataKey="value"
  innerRadius={60}
  outerRadius={80} 
  labelLine={false}
  label={({ cx, cy }) => (
    <>
     
      <text
        x={cx}
        y={cy - 10}
        textAnchor="middle"
        dominantBaseline="middle"
        className="fs-3 fw-bold"
      >
        {total}
      </text>
   <text
        x={cx}
        y={cy + 15}
        textAnchor="middle"
        dominantBaseline="middle"
         className="fs-6"
      >
       {title}
      </text>
    </>
  )}

  
>
  {data.map((item, index) => (
    <Cell key={index} fill={item.color} />
  ))}
</Pie>  


          <Tooltip />
            <Legend
    layout={isLaptop ? "horizontal" : "vertical"}
    align={isLaptop ? "center" : "right"}
    verticalAlign={isLaptop ? "bottom" : "middle"}
    iconType="circle"
  />
        </PieChart>
      </ResponsiveContainer>
  );
};

export default DonutChart;
