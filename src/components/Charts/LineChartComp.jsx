import {
  ResponsiveContainer,
  AreaChart,
  Area,
  XAxis,
  YAxis,
  Tooltip
} from "recharts";

const LineChartComp = ({ data }) => (
  
    <ResponsiveContainer width="100%" height={260}>
      <AreaChart data={data}>
        <defs>
          <linearGradient id="colorValue" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#6f42c1" stopOpacity={0.35} />
            <stop offset="100%" stopColor="#6f42c1" stopOpacity={0} />
          </linearGradient>
        </defs>

        <XAxis
          dataKey="month"
          axisLine={false}
          tickLine={false}
        />

        <YAxis
          tickFormatter={(v) => `${v} L`}
          axisLine={false}
          tickLine={false}
        />

        <Tooltip
          formatter={(value) => `${value} L`}
        />

        <Area
          type="monotone"
          dataKey="value"
          stroke="#6f42c1"
          strokeWidth={2}
          fill="url(#colorValue)"
          dot={false}
        />

      </AreaChart>
    </ResponsiveContainer>
);

export default LineChartComp;
