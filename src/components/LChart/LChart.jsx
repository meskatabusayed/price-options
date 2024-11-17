import { LineChart, Line, XAxis , YAxis} from "recharts";

const LChart = () => {
  const subjectMarks = [
    {
      id: 1,
      name: "Alice",
      math: 85,
      physics: 78,
      chemistry: 88,
    },
    {
      id: 2,
      name: "Bob",
      math: 78,
      physics: 74,
      chemistry: 81,
    },
    {
      id: 3,
      name: "Charlie",
      math: 92,
      physics: 88,
      chemistry: 94,
    },
    {
      id: 4,
      name: "Daisy",
      math: 88,
      physics: 85,
      chemistry: 90,
    },
    {
      id: 5,
      name: "Ethan",
      math: 95,
      physics: 91,
      chemistry: 96,
    },
    {
      id: 6,
      name: "Fiona",
      math: 72,
      physics: 70,
      chemistry: 75,
    },
    {
      id: 7,
      name: "George",
      math: 80,
      physics: 77,
      chemistry: 32,
    },
    {
      id: 8,
      name: "Hannah",
      math: 89,
      physics: 84,
      chemistry: 87,
    },
    {
      id: 9,
      name: "Ian",
      math: 76,
      physics: 72,
      chemistry: 78,
    },
    {
      id: 10,
      name: "Jack",
      math: 22,
      physics: 79,
      chemistry: 85,
    },
  ];

  return (
    <div>
      <LineChart width={500} height={400} data={subjectMarks}>
      
        <XAxis  dataKey="name"/>
        <YAxis/>
        <Line type="monotone" dataKey="math" stroke="#8884d8" />
        <Line type="monotone" dataKey="physics" stroke="red" />
        <Line type="monotone" dataKey="chemistry" stroke="green" />
      </LineChart>
    </div>
  );
};

export default LChart;
