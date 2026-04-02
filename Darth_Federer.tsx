import React from "react";
import {
  CartesianGrid,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import federerPortrait from "./src/assets/about-roger-federer.jpg";

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
  return (
    <main className="dashboard">
      <section className="hero">
        <p className="eyebrow">Roger Federer</p>
        <h1>Career Dashboard</h1>
        <p className="lede">
          A quick look at Federer&apos;s season-by-season win percentage,
          career totals, and late-career resurgence.
        </p>
      </section>

      <section className="stats-grid" aria-label="Career summary">
        <article className="stat-card stat-card-green">
          <span className="stat-label">Total Wins</span>
          <strong className="stat-value">1251</strong>
        </article>
        <article className="stat-card stat-card-red">
          <span className="stat-label">Total Losses</span>
          <strong className="stat-value">275</strong>
        </article>
        <article className="stat-card stat-card-gold">
          <span className="stat-label">Grand Slams</span>
          <strong className="stat-value">20</strong>
        </article>
      </section>

      <section className="panel">
        <div className="panel-header">
          <h2>Win Percentage vs Age</h2>
          <p>Approximate season-level ATP performance from age 18 to 41.</p>
        </div>

        <div className="chart-wrap chart-wrap-portrait">
          <img
            className="chart-portrait"
            src={federerPortrait}
            alt=""
            aria-hidden="true"
          />
          <div className="chart-overlay">
            <ResponsiveContainer width="100%" height={360}>
              <LineChart
                data={data}
                margin={{ top: 16, right: 24, bottom: 8, left: 0 }}
              >
                <CartesianGrid stroke="rgba(148, 163, 184, 0.18)" />
                <XAxis
                  dataKey="age"
                  stroke="#cbd5e1"
                  tickLine={false}
                  axisLine={false}
                />
                <YAxis
                  domain={[40, 100]}
                  stroke="#cbd5e1"
                  tickLine={false}
                  axisLine={false}
                />
                <Tooltip
                  contentStyle={{
                    backgroundColor: "#0f172a",
                    border: "1px solid #1e293b",
                    borderRadius: "12px",
                    color: "#e2e8f0",
                  }}
                />
                <Line
                  type="monotone"
                  dataKey="winPct"
                  name="Win %"
                  stroke="#38bdf8"
                  strokeWidth={3}
                  dot={{ r: 3, fill: "#f8fafc" }}
                  activeDot={{ r: 5 }}
                />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>
      </section>

      <section className="panel">
        <div className="panel-header">
          <h2>Season Data</h2>
          <p>The full dataset is listed below so the numbers stay visible on every deployment.</p>
        </div>

        <div className="table-wrap">
          <table>
            <thead>
              <tr>
                <th>Year</th>
                <th>Age</th>
                <th>Win %</th>
              </tr>
            </thead>
            <tbody>
              {data.map((season) => (
                <tr key={season.year}>
                  <td>{season.year}</td>
                  <td>{season.age}</td>
                  <td>{season.winPct}%</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    </main>
  );
}
