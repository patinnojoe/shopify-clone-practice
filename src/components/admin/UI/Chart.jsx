import { PureComponent } from 'react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip } from 'recharts';

const data = [
  {
    name: '12:00AM',
    uv: 1890,
    pv: 4800,
    amt: 2181,
  },
  {
    name: '5:00AM',
    uv: 2390,
    pv: 3800,
    amt: 2500,
  },
  {
    name: '10:00AM',
    uv: 3490,
    pv: 4300,
    amt: 2100,
  },
  {
    name: '3:00PM',
    uv: 3490,
    pv: 4300,
    amt: 2100,
  },
];

export default class ChartComp extends PureComponent {
  static demoUrl = 'https://codesandbox.io/s/simple-area-chart-4ujxw';

  render() {
    return (
      <AreaChart
        width={400}
        height={300}
        data={data}
        margin={{
          top: 10,
          right: 30,
          left: 0,
          bottom: 0,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Area type="monotone" dataKey="uv" stroke="#212529" fill="#212529" />
      </AreaChart>
    );
  }
}
