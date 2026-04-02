import { Tooltip, ResponsiveContainer } from "recharts";
// Approximate dataset (can be refined with full ATP data)
const data = [
    { year: 1999, age: 18, winPct: 45 },
    { year: 2000, age: 19, winPct: 50 },
    { year: 2001, age: 20, winPct: 60 },
    { year: 2002, age: 21, winPct: 70 },
    { year: 2003, age: 22, winPct: 80 },
    { year: 2004, age: 23, winPct: 92 },
    { year: 2005, age: 24, winPct: 95 },
    { year: 2006, age: 25, winPct: 94 },
    { year: 2007, age: 26, winPct: 91 },
    { year: 2008, age: 27, winPct: 88 },
    { year: 2009, age: 28, winPct: 85 },
    { year: 2010, age: 29, winPct: 82 },
    { year: 2011, age: 30, winPct: 78 },
    { year: 2012, age: 31, winPct: 83 },
    { year: 2013, age: 32, winPct: 65 },
    { year: 2014, age: 33, winPct: 80 },
    { year: 2015, age: 34, winPct: 85 },
    { year: 2016, age: 35, winPct: 70 },
    { year: 2017, age: 36, winPct: 91 },
    { year: 2018, age: 37, winPct: 88 },
    { year: 2019, age: 38, winPct: 84 },
    { year: 2020, age: 39, winPct: 75 },
    { year: 2021, age: 40, winPct: 65 },
    { year: 2022, age: 41, winPct: 50 }
];
export default function FedererDashboard() {
    return className = "p-6 bg-black text-white min-h-screen" >
        className;
    "text-3xl font-bold mb-6" > Roger;
    Federer;
    Career;
    Dashboard < /h1>
        < div;
    className = "bg-gray-900 p-4 rounded-2xl shadow-lg" >
        className;
    "text-xl mb-4" > Win % vs;
    Age < /h2>
        < ResponsiveContainer;
    width = "100%";
    height = { 400:  } >
        data;
    {
        data;
    }
     >
        dataKey;
    "age" /  >
        domain;
    {
        [40, 100];
    }
    />
        < Tooltip /  >
        type;
    "monotone";
    dataKey = "winPct";
    strokeWidth = { 3:  } /  >
        /LineChart>
        < /ResponsiveContainer>
        < /div>
        < div;
    className = "mt-6 grid grid-cols-3 gap-4" >
        className;
    "bg-green-700 p-4 rounded-xl" >
        className;
    "text-lg" > Total;
    Wins < /h3>
        < p;
    className = "text-2xl font-bold" > 1251 < /p>
        < /div>
        < div;
    className = "bg-red-700 p-4 rounded-xl" >
        className;
    "text-lg" > Total;
    Losses < /h3>
        < p;
    className = "text-2xl font-bold" > 275 < /p>
        < /div>
        < div;
    className = "bg-yellow-600 p-4 rounded-xl" >
        className;
    "text-lg" > Grand;
    Slams < /h3>
        < p;
    className = "text-2xl font-bold" > 20 < /p>
        < /div>
        < /div>
        < /div>;
    ;
}
