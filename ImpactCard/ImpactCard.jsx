import { Card, Text, Metric, ProgressBar } from "@tremor/react";

export default function ImpactCard({ label, value, max }) {
  const percent = ((value / max) * 100).toFixed(2);

  return (
    <Card className="w-full">
      <Text className="text-sm text-gray-600">{label}</Text>
      <Metric>${value.toLocaleString()}</Metric>
      <ProgressBar value={percent} color="blue" className="mt-2" />
      <Text className="text-xs text-gray-400 mt-1">{percent}% of ${max.toLocaleString()}</Text>
    </Card>
  );
}
