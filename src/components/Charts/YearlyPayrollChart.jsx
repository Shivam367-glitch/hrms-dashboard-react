import {
  ResponsiveContainer,
  AreaChart,
  Area,
  XAxis,
  YAxis,
  Tooltip
} from "recharts";

const YearlyPayrollChart = ({ data }) => {
  return (
    <div style={{ position: "relative" }}>
      
      <div
        style={{
          position: "absolute",
          top: 10,
          left: "45%",
          color: "#16a34a",
          fontWeight: 600
        }}
      >
        +12.4% YoY
      </div>

      <ResponsiveContainer width="100%" height={300}>
        <AreaChart data={data}>

          <defs>
            <linearGradient id="blueFill" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#0d6efd" stopOpacity={0.3} />
              <stop offset="100%" stopColor="#0d6efd" stopOpacity={0} />
            </linearGradient>

            <linearGradient id="grayFill" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#9ca3af" stopOpacity={0.25} />
              <stop offset="100%" stopColor="#9ca3af" stopOpacity={0} />
            </linearGradient>
          </defs>

          <XAxis
            dataKey="month"
            axisLine={false}
            tickLine={false}
          />

          <YAxis
            tickFormatter={(v) => `${v}K`}
            axisLine={false}
            tickLine={false}
          />

          <Tooltip
            formatter={(value) => `₹${value}K`}
          />

          <Area
            type="monotone"
            dataKey="y2026"
            stroke="#0d6efd"
            strokeWidth={2}
            fill="url(#blueFill)"
            dot={false}
          />

          <Area
            type="monotone"
            dataKey="y2025"
            stroke="#9ca3af"
            strokeWidth={2}
            fill="url(#grayFill)"
            dot={false}
          />

        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
};

export default YearlyPayrollChart;
