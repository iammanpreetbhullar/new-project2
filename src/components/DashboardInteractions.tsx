import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card';
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';
import { CalendarDays, Users, MessageSquare, Activity } from 'lucide-react';

const data = [
  { name: 'Mon', interactions: 20 },
  { name: 'Tue', interactions: 35 },
  { name: 'Wed', interactions: 45 },
  { name: 'Thu', interactions: 30 },
  { name: 'Fri', interactions: 55 },
  { name: 'Sat', interactions: 25 },
  { name: 'Sun', interactions: 15 },
];

const stats = [
  {
    title: 'Total Users',
    value: '2,845',
    icon: Users,
  },
  {
    title: 'Active Sessions',
    value: '148',
    icon: Activity,
  },
  {
    title: 'Messages',
    value: '1,288',
    icon: MessageSquare,
  },
  {
    title: 'Daily Active',
    value: '845',
    icon: CalendarDays,
  },
];

export default function DashboardInteractions() {
  return (
    <div className="p-6 space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {stats.map((stat, index) => (
          <Card key={index}>
            <CardContent className="p-6">
              <div className="flex items-center justify-between space-x-4">
                <div>
                  <p className="text-sm font-medium text-muted-foreground">{stat.title}</p>
                  <h3 className="text-2xl font-bold">{stat.value}</h3>
                </div>
                <div className="p-2 bg-primary/10 rounded-full">
                  <stat.icon className="w-6 h-6 text-primary" />
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Weekly Interactions</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="h-[300px] w-full">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={data}>
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Bar dataKey="interactions" fill="hsl(var(--primary))" radius={[4, 4, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}