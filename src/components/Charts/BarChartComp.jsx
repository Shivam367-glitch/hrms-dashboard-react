import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer
} from "recharts"; 

const BarChartComp = ({data}) => {
  return (
  <ResponsiveContainer width="100%" height={220}>
        <BarChart data={data} barSize={50}>
          <XAxis
            dataKey="label"
            axisLine={false}
            tickLine={false}
          />
          <YAxis
            domain={[0, 10]}
            axisLine={false}
            tickLine={false}
          />
          <Bar
            dataKey="value"
            radius={[10, 10, 0, 0]}
            fill="#0d6efd"
          />
        </BarChart>
      </ResponsiveContainer>
  )
}

export default BarChartComp