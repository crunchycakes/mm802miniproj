"use client"

import * as React from "react"
import { CartesianGrid, XAxis, Label, Pie, PieChart, Sector,
  PolarAngleAxis, PolarGrid, Radar, RadarChart, Bar, BarChart} from "recharts"
import { PieSectorDataItem } from "recharts/types/polar/Pie"

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  ChartConfig,
  ChartContainer,
  ChartLegend,
  ChartLegendContent,
  ChartStyle,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart"

// incident type
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

const data_incident_type = [
  { inc: "turb", count: 221, fill: "var(--color-turb)" },
  { inc: "sec", count: 220, fill: "var(--color-sec)" },
  { inc: "uimc", count: 16, fill: "var(--color-uimc)" },
  { inc: "evac", count: 13, fill: "var(--color-evac)" },
  { inc: "mac", count: 994, fill: "var(--color-mac)" },
  { inc: "gcol", count: 189, fill: "var(--color-turb)" },
  { inc: "loc_g", count: 336, fill: "var(--color-sec)" },
  { inc: "usos", count: 30, fill: "var(--color-uimc)" },
  { inc: "scf_pp", count: 1426, fill: "var(--color-evac)" },
  { inc: "ramp", count: 61, fill: "var(--color-mac)" },
  { inc: "fuel", count: 279, fill: "var(--color-turb)" },
  { inc: "lalt", count: 78, fill: "var(--color-sec)" },
  { inc: "cabin", count: 94, fill: "var(--color-uimc)" },
  { inc: "scf_np", count: 3148, fill: "var(--color-evac)" },
  { inc: "wstrw", count: 49, fill: "var(--color-mac)" },
  { inc: "gtow", count: 4, fill: "var(--color-turb)" },
  { inc: "nav", count: 88, fill: "var(--color-sec)" },
  { inc: "loc_i", count: 455, fill: "var(--color-uimc)" },
  { inc: "f_ni", count: 760, fill: "var(--color-evac)" },
  { inc: "unk", count: 64, fill: "var(--color-mac)" },
  { inc: "bird", count: 73, fill: "var(--color-turb)" },
  { inc: "cfit", count: 144, fill: "var(--color-sec)" },
  { inc: "ctol", count: 363, fill: "var(--color-uimc)" },
  { inc: "med", count: 607, fill: "var(--color-evac)" },
  { inc: "ice", count: 23, fill: "var(--color-mac)" },
  { inc: "extl", count: 191, fill: "var(--color-turb)" },
  { inc: "ri", count: 130, fill: "var(--color-sec)" },
  { inc: "arc", count: 413, fill: "var(--color-uimc)" },
  { inc: "wild", count: 12, fill: "var(--color-evac)" },
  { inc: "adrm", count: 26, fill: "var(--color-mac)" },
  { inc: "re", count: 397, fill: "var(--color-evac)" },
  { inc: "othr", count: 174, fill: "var(--color-mac)" },
  { inc: "f_post", count: 15, fill: "var(--color-evac)" },
  { inc: "aman", count: 70, fill: "var(--color-mac)" },
  { inc: "atm", count: 149, fill: "var(--color-evac)" },
  { inc: "loli", count: 3, fill: "var(--color-mac)" },
]

const config_incident_type = {
  incidents: {
    label: "Incidents",
  },
  turb: {
    label: "Turbulence",
    color: "hsl(var(--chart-1))",
  },
  sec: {
    label: "Security",
    color: "hsl(var(--chart-2))",
  },
  uimc: {
    label: "Unintended flight into adverse conditions",
    color: "hsl(var(--chart-3))",
  },
  evac: {
    label: "Evacuation",
    color: "hsl(var(--chart-4))",
  },
  mac: {
    label: "Collision risk",
    color: "hsl(var(--chart-5))",
  },
  gcol: {
    label: "Ground collision",
    color: "hsl(var(--chart-1))",
  },
  loc_g: {
    label: "Loss of control on ground",
    color: "hsl(var(--chart-2))",
  },
  usos: {
    label: "Runway under/overshoot",
    color: "hsl(var(--chart-3))",
  },
  scf_pp: {
    label: "Powerplant component failure",
    color: "hsl(var(--chart-4))",
  },
  ramp: {
    label: "Ground handling",
    color: "hsl(var(--chart-5))",
  },
  fuel: {
    label: "Fuel related",
    color: "hsl(var(--chart-1))",
  },
  lalt: {
    label: "Low altitude operations",
    color: "hsl(var(--chart-2))",
  },
  cabin: {
    label: "Cabin safety events",
    color: "hsl(var(--chart-3))",
  },
  scf_np: {
    label: "Non-powerplant component failure",
    color: "hsl(var(--chart-4))",
  },
  wstrw: {
    label: "Windshear/thunderstorm",
    color: "hsl(var(--chart-5))",
  },
  gtow: {
    label: "Glider towing related events",
    color: "hsl(var(--chart-1))",
  },
  nav: {
    label: "Navigational error",
    color: "hsl(var(--chart-2))",
  },
  loc_i: {
    label: "Inflight loss of control",
    color: "hsl(var(--chart-3))",
  },
  f_ni: {
    label: "Fire/smoke (non-impact)",
    color: "hsl(var(--chart-4))",
  },
  unk: {
    label: "Unknown",
    color: "hsl(var(--chart-5))",
  },
  bird: {
    label: "Bird",
    color: "hsl(var(--chart-1))",
  },
  cfit: {
    label: "Controlled flight into terrain",
    color: "hsl(var(--chart-2))",
  },
  ctol: {
    label: "Collision during takeoff/landing",
    color: "hsl(var(--chart-3))",
  },
  med: {
    label: "Medical",
    color: "hsl(var(--chart-4))",
  },
  ice: {
    label: "Icing",
    color: "hsl(var(--chart-5))",
  },
  extl: {
    label: "External load related occurrences",
    color: "hsl(var(--chart-1))",
  },
  ri: {
    label: "Runway incursion",
    color: "hsl(var(--chart-2))",
  },
  arc: {
    label: "Abnormal runway contact",
    color: "hsl(var(--chart-3))",
  },
  wild: {
    label: "Wildfire",
    color: "hsl(var(--chart-4))",
  },
  adrm: {
    label: "Aerodrome",
    color: "hsl(var(--chart-5))",
  },
  re: {
    label: "Runway Incursion",
    color: "hsl(var(--chart-1))",
  },
  othr: {
    label: "Other",
    color: "hsl(var(--chart-2))",
  },
  f_post: {
    label: "Fire/smoke (post-impact)",
    color: "hsl(var(--chart-3))",
  },
  aman: {
    label: "Abrupt maneuver",
    color: "hsl(var(--chart-4))",
  },
  atm: {
    label: "ATM/CNS",
    color: "hsl(var(--chart-5))",
  },
  loli: {
    label: "Loss of lifting conditions en route",
    color: "hsl(var(--chart-1))",
  },
} satisfies ChartConfig

export function ChartIncType() {
  const id = "pie-interactive"
  const [activeInc, setActiveInc] = React.useState(data_incident_type[0].inc)
  const activeIndex = React.useMemo(
    () => data_incident_type.findIndex((item) => item.inc === activeInc),
    [activeInc]
  )
  const months = React.useMemo(() => data_incident_type.map((item) => item.inc), [])
  return (
    <Card data-chart={id} className="flex flex-col">
      <ChartStyle id={id} config={config_incident_type} />
      <CardHeader className="flex-row items-start space-y-0 pb-0">
        <div className="grid gap-1">
          <CardTitle>Flight incidents by type (ICAO)</CardTitle>
          <CardDescription>Edmonton 1995</CardDescription>
        </div>
        <Select value={activeInc} onValueChange={setActiveInc}>
          <SelectTrigger
            className="ml-auto h-7 w-[130px] rounded-lg pl-2.5"
            aria-label="Select a value"
          >
            <SelectValue placeholder="Select incident" />
          </SelectTrigger>
          <SelectContent align="end" className="rounded-xl">
            {months.map((key) => {
              const config = config_incident_type[key as keyof typeof config_incident_type]
              if (!config) {
                return null
              }
              return (
                <SelectItem
                  key={key}
                  value={key}
                  className="rounded-lg [&_span]:flex"
                >
                  <div className="flex items-center gap-2 text-xs">
                    <span
                      className="flex h-3 w-3 shrink-0 rounded-sm"
                      style={{
                        backgroundColor: `var(--color-${key})`,
                      }}
                    />
                    {config?.label}
                  </div>
                </SelectItem>
              )
            })}
          </SelectContent>
        </Select>
      </CardHeader>
      <CardContent className="flex flex-1 justify-center pb-0">
        <ChartContainer
          id={id}
          config={config_incident_type}
          className="mx-auto aspect-square w-full max-w-[600px]"
        >
          <PieChart>
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent hideLabel />}
            />
            <Pie
              data={data_incident_type}
              dataKey="count"
              nameKey="inc"
              innerRadius={60}
              strokeWidth={5}
              activeIndex={activeIndex}
              activeShape={({
                outerRadius = 0,
                ...props
              }: PieSectorDataItem) => (
                <g>
                  <Sector {...props} outerRadius={outerRadius + 10} />
                  <Sector
                    {...props}
                    outerRadius={outerRadius + 25}
                    innerRadius={outerRadius + 12}
                  />
                </g>
              )}
            >
              <Label
                content={({ viewBox }) => {
                  if (viewBox && "cx" in viewBox && "cy" in viewBox) {
                    return (
                      <text
                        x={viewBox.cx}
                        y={viewBox.cy}
                        textAnchor="middle"
                        dominantBaseline="middle"
                      >
                        <tspan
                          x={viewBox.cx}
                          y={viewBox.cy}
                          className="fill-foreground text-3xl font-bold"
                        >
                          {data_incident_type[activeIndex].count.toLocaleString()}
                        </tspan>
                        <tspan
                          x={viewBox.cx}
                          y={(viewBox.cy || 0) + 24}
                          className="fill-muted-foreground"
                        >
                          Incidents
                        </tspan>
                      </text>
                    )
                  }
                }}
              />
            </Pie>
          </PieChart>
        </ChartContainer>
      </CardContent>
    </Card>
  )
}


// another type
const data_incident_type2 = [
  { inc: "slu", count: 272, fill: "var(--color-turb)" },
  { inc: "inc", count: 33, fill: "var(--color-sec)" },
  { inc: "los", count: 658, fill: "var(--color-uimc)" },
  { inc: "eme", count: 9740, fill: "var(--color-evac)" },
  { inc: "dep", count: 537, fill: "var(--color-mac)" },
  { inc: "tra", count: 38, fill: "var(--color-turb)" },
  { inc: "jro", count: 4960, fill: "var(--color-sec)" },
  { inc: "una", count: 1476, fill: "var(--color-uimc)" },
  { inc: "run", count: 599, fill: "var(--color-evac)" },
  { inc: "fue", count: 272, fill: "var(--color-mac)" },
  { inc: "dif", count: 1269, fill: "var(--color-turb)" },
  { inc: "ris", count: 696, fill: "var(--color-sec)" },
  { inc: "eng", count: 5191, fill: "var(--color-uimc)" },
  { inc: "col", count: 483, fill: "var(--color-evac)" },
  { inc: "dra", count: 32, fill: "var(--color-mac)" },
  { inc: "dan", count: 79, fill: "var(--color-turb)" },
  { inc: "smo", count: 3151, fill: "var(--color-sec)" },
  { inc: "lan", count: 30, fill: "var(--color-uimc)" },
]

const config_incident_type2 = {
  incidents: {
    label: "Incidents",
  },
  slu: {
    label: "Slung load released (xii)",
    color: "hsl(var(--chart-1))",
  },
  inc: {
    label: "Incorrect/contaminated fuel (ix)",
    color: "hsl(var(--chart-2))",
  },
  los: {
    label: "Loss of separation (x)",
    color: "hsl(var(--chart-3))",
  },
  eme: {
    label: "Emergency/priority (xi)",
    color: "hsl(var(--chart-4))",
  },
  dep: {
    label: "Depressurisation (vii)",
    color: "hsl(var(--chart-5))",
  },
  tra: {
    label: "Transmission gearbox (ii)",
    color: "hsl(var(--chart-1))",
  },
  jro: {
    label: "J. ROC/LOS",
    color: "hsl(var(--chart-2))",
  },
  una: {
    label: "Unable to perform (vi)",
    color: "hsl(var(--chart-3))",
  },
  run: {
    label: "Runway excursion (v)",
    color: "hsl(var(--chart-4))",
  },
  fue: {
    label: "Fuel shortage (viii)",
    color: "hsl(var(--chart-5))",
  },
  dif: {
    label: "Difficult to control (iv)",
    color: "hsl(var(--chart-1))",
  },
  ris: {
    label: "Risk of collision (x)",
    color: "hsl(var(--chart-2))",
  },
  eng: {
    label: "Engine (i)",
    color: "hsl(var(--chart-3))",
  },
  col: {
    label: "Collision (x)",
    color: "hsl(var(--chart-4))",
  },
  dra: {
    label: "Drags any part on ground (v)",
    color: "hsl(var(--chart-5))",
  },
  dan: {
    label: "Dangerous goods released (xii)",
    color: "hsl(var(--chart-1))",
  },
  smo: {
    label: "Smoke or fire (iii)",
    color: "hsl(var(--chart-2))",
  },
  lan: {
    label: "Landing gear retracted/collapsed (v)",
    color: "hsl(var(--chart-3))",
  },
} satisfies ChartConfig

export function ChartIncType2() {
  const id = "pie-interactive"
  const [activeInc, setActiveInc] = React.useState(data_incident_type2[0].inc)
  const activeIndex = React.useMemo(
    () => data_incident_type2.findIndex((item) => item.inc === activeInc),
    [activeInc]
  )
  const months = React.useMemo(() => data_incident_type2.map((item) => item.inc), [])
  return (
    <Card data-chart={id} className="flex flex-col">
      <ChartStyle id={id} config={config_incident_type2} />
      <CardHeader className="flex-row items-start space-y-0 pb-0">
        <div className="grid gap-1">
          <CardTitle>Flight incidents by type (Transportation Safety Board of Canada)</CardTitle>
          <CardDescription>Edmonton 1995</CardDescription>
        </div>
        <Select value={activeInc} onValueChange={setActiveInc}>
          <SelectTrigger
            className="ml-auto h-7 w-[130px] rounded-lg pl-2.5"
            aria-label="Select a value"
          >
            <SelectValue placeholder="Select incident" />
          </SelectTrigger>
          <SelectContent align="end" className="rounded-xl">
            {months.map((key) => {
              const config = config_incident_type2[key as keyof typeof config_incident_type2]
              if (!config) {
                return null
              }
              return (
                <SelectItem
                  key={key}
                  value={key}
                  className="rounded-lg [&_span]:flex"
                >
                  <div className="flex items-center gap-2 text-xs">
                    <span
                      className="flex h-3 w-3 shrink-0 rounded-sm"
                      style={{
                        backgroundColor: `var(--color-${key})`,
                      }}
                    />
                    {config?.label}
                  </div>
                </SelectItem>
              )
            })}
          </SelectContent>
        </Select>
      </CardHeader>
      <CardContent className="flex flex-1 justify-center pb-0">
        <ChartContainer
          id={id}
          config={config_incident_type2}
          className="mx-auto aspect-square w-full max-w-[600px]"
        >
          <PieChart>
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent hideLabel />}
            />
            <Pie
              data={data_incident_type2}
              dataKey="count"
              nameKey="inc"
              innerRadius={60}
              strokeWidth={5}
              activeIndex={activeIndex}
              activeShape={({
                outerRadius = 0,
                ...props
              }: PieSectorDataItem) => (
                <g>
                  <Sector {...props} outerRadius={outerRadius + 10} />
                  <Sector
                    {...props}
                    outerRadius={outerRadius + 25}
                    innerRadius={outerRadius + 12}
                  />
                </g>
              )}
            >
              <Label
                content={({ viewBox }) => {
                  if (viewBox && "cx" in viewBox && "cy" in viewBox) {
                    return (
                      <text
                        x={viewBox.cx}
                        y={viewBox.cy}
                        textAnchor="middle"
                        dominantBaseline="middle"
                      >
                        <tspan
                          x={viewBox.cx}
                          y={viewBox.cy}
                          className="fill-foreground text-3xl font-bold"
                        >
                          {data_incident_type2[activeIndex].count.toLocaleString()}
                        </tspan>
                        <tspan
                          x={viewBox.cx}
                          y={(viewBox.cy || 0) + 24}
                          className="fill-muted-foreground"
                        >
                          Incidents
                        </tspan>
                      </text>
                    )
                  }
                }}
              />
            </Pie>
          </PieChart>
        </ChartContainer>
      </CardContent>
    </Card>
  )
}

// directionality
const data_dir = [
  { dir: "North", count: 524 },
  { dir: "North-northeast", count: 155 },
  { dir: "Northeast", count: 557 },
  { dir: "East-northeast", count: 125 },
  { dir: "East", count: 527 },
  { dir: "East-southeast", count: 99 },
  { dir: "Southeast", count: 354 },
  { dir: "South-southeast", count: 89 },
  { dir: "South", count: 439 },
  { dir: "South-southwest", count: 80 },
  { dir: "Southwest", count: 390 },
  { dir: "West-southwest", count: 89 },
  { dir: "West", count: 477 },
  { dir: "West-northwest", count: 97 },
  { dir: "Northwest", count: 485 },
  { dir: "North-northwest", count: 113 },

]
const config_dir = {
  count: {
    label: "Count",
    color: "hsl(var(--chart-1))",
  },
} satisfies ChartConfig
export function ChartDirs() {
  return (
    <Card>
      <CardHeader className="items-center pb-4">
        <CardTitle>Incidents by plane bearing</CardTitle>
        <CardDescription>
          Edmonton 1995
        </CardDescription>
      </CardHeader>
      <CardContent className="pb-0">
        <ChartContainer
          config={config_dir}
          className="mx-auto aspect-square max-h-[600px]"
        >
          <RadarChart data={data_dir}>
            <ChartTooltip cursor={false} content={<ChartTooltipContent />} />
            <PolarAngleAxis dataKey="dir" />
            <PolarGrid />
            <Radar
              dataKey="count"
              fill="var(--color-count)"
              fillOpacity={0.6}
            />
          </RadarChart>
        </ChartContainer>
      </CardContent>
      <CardFooter className="flex-col gap-2 text-sm">
        <div className="flex items-center gap-2 font-medium leading-none">
          There are slightly more accidents trending northeast.
        </div>
        <div className="flex items-center gap-2 leading-none text-muted-foreground">
          x
        </div>
      </CardFooter>
    </Card>
  )
}

// injury by direction
const data_dirinj = [
  { dir: "North", fatal: 79, serious: 34, minor: 66, ambiguous: 1},
  { dir: "North-northeast", fatal: 24, serious: 5, minor: 33, ambiguous: 1},
  { dir: "Northeast", fatal: 69, serious: 23, minor: 45, ambiguous: 0},
  { dir: "East-northeast", fatal: 10, serious: 7, minor: 65, ambiguous: 0},
  { dir: "East", fatal: 63, serious: 30, minor: 78, ambiguous: 1},
  { dir: "East-southeast", fatal: 16, serious: 9, minor: 13, ambiguous: 10},
  { dir: "Southeast", fatal: 44, serious: 26, minor: 45, ambiguous: 0},
  { dir: "South-southeast", fatal: 11, serious: 11, minor: 6, ambiguous: 0},
  { dir: "South", fatal: 49, serious: 21, minor: 98, ambiguous: 0},
  { dir: "South-southwest", fatal: 11, serious: 7, minor: 5, ambiguous: 0},
  { dir: "Southwest", fatal: 50, serious: 44, minor: 102, ambiguous: 0},
  { dir: "West-southwest", fatal: 21, serious: 7, minor: 9, ambiguous: 2},
  { dir: "West", fatal: 110, serious: 38, minor: 86, ambiguous: 0},
  { dir: "West-northwest", fatal: 16, serious: 2, minor: 15, ambiguous: 0},
  { dir: "Northwest", fatal: 68, serious: 53, minor: 86, ambiguous: 0},
  { dir: "North-northwest", fatal: 12, serious: 11, minor: 28, ambiguous: 0},

]
const config_dirinj = {
  fatal: {
    label: "Fatal",
    color: "hsl(var(--chart-1))",
  },
  serious: {
    label: "Serious",
    color: "hsl(var(--chart-2))",
  },
  minor: {
    label: "Minor",
    color: "hsl(var(--chart-3))",
  },
  ambiguous: {
    label: "Unknown",
    color: "hsl(var(--chart-5))",
  },
} satisfies ChartConfig
export function ChartDirInj() {
  return (
    <Card>
      <CardHeader className="items-center pb-4">
        <CardTitle>Injuries by plane bearing at incident</CardTitle>
        <CardDescription>
          Edmonton 1995
        </CardDescription>
      </CardHeader>
      <CardContent>
        <ChartContainer
          config={config_dirinj}
          className="mx-auto aspect-square max-h-[600px]"
        >
          <RadarChart
            data={data_dirinj}
            margin={{
              top: -40,
              bottom: -10,
            }}
          >
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent indicator="line" />}
            />
            <PolarAngleAxis dataKey="dir" />
            <PolarGrid />
            <Radar
              dataKey="fatal"
              fill="var(--color-fatal)"
              fillOpacity={0.4}
            />
            <Radar
              dataKey="serious"
              fill="var(--color-serious)"
              fillOpacity={0.5}
            />
            <Radar
              dataKey="minor"
              fill="var(--color-minor)"
              fillOpacity={0.5}
            />
            <Radar
              dataKey="ambiguous"
              fill="var(--color-ambiguous)"
              fillOpacity={0.9}
            />
            <ChartLegend className="mt-8" content={<ChartLegendContent />} />
          </RadarChart>
        </ChartContainer>
      </CardContent>
      <CardFooter className="flex-col gap-2 pt-4 text-sm">
        <div className="flex items-center gap-2 font-medium leading-none">
          Non-injuries excluded for the sake of visualisation. Significant unknown outlier at ESE truncated.
        </div>
        <div className="flex items-center gap-2 leading-none text-muted-foreground">
          This suggests some better granularity in directional reporting closer to Northeast.
        </div>
      </CardFooter>
    </Card>
  )
}


// injury breakdown by region
const data_ibyregion = [
  { region: "Atlantic", fatal: 1288, serious: 231, minor: 523, unknown: 399 },
  { region: "Central", fatal: 824, serious: 653, minor: 1152, unknown: 37 },
  { region: "Foreign", fatal: 1217, serious: 126, minor: 492, unknown: 4 },
  { region: "North Atlantic", fatal: 0, serious: 0, minor: 9, unknown: 0 },
  { region: "Ontario", fatal: 900, serious: 802, minor: 1244, unknown: 55 },
  { region: "Pacific", fatal: 1648, serious: 847, minor: 1270, unknown: 87 },
  { region: "Quebec", fatal: 1102, serious: 649, minor: 1126, unknown: 8 },
  { region: "Western", fatal: 955, serious: 680, minor: 1081, unknown: 5 },
]
const config_ibyregion = {
  fatal: {
    label: "fatal",
    color: "hsl(var(--chart-1))",
  },
  serious: {
    label: "serious",
    color: "hsl(var(--chart-2))",
  },
  minor: {
    label: "minor",
    color: "hsl(var(--chart-3))",
  },
  none: {
    label: "none",
    color: "hsl(var(--chart-4))",
  },
  unknown: {
    label: "unknown",
    color: "hsl(var(--chart-5))",
  },
} satisfies ChartConfig

export function ChartIByRegion() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Injury Type by Region</CardTitle>
        <CardDescription>Edmonton 1995</CardDescription>
      </CardHeader>
      <CardContent>
        <ChartContainer config={config_ibyregion}>
          <BarChart accessibilityLayer data={data_ibyregion}>
            <CartesianGrid vertical={false} />
            <XAxis
              dataKey="region"
              tickLine={false}
              tickMargin={10}
              axisLine={false}
              tickFormatter={(value) => value.slice(0, 20)}
            />
            <ChartTooltip content={<ChartTooltipContent hideLabel />} />
            <ChartLegend content={<ChartLegendContent />} />
            <Bar
              dataKey="fatal"
              stackId="a"
              fill="var(--color-fatal)"
              radius={[0, 0, 4, 4]}
            />
            <Bar
              dataKey="serious"
              stackId="a"
              fill="var(--color-serious)"
              radius={[4, 4, 0, 0]}
            />
            <Bar
              dataKey="minor"
              stackId="a"
              fill="var(--color-minor)"
              radius={[4, 4, 0, 0]}
            />
            <Bar
              dataKey="none"
              stackId="a"
              fill="var(--color-none)"
              radius={[4, 4, 0, 0]}
            />
            <Bar
              dataKey="unknown"
              stackId="a"
              fill="var(--color-unknown)"
              radius={[4, 4, 0, 0]}
            />
          </BarChart>
        </ChartContainer>
      </CardContent>
      <CardFooter className="flex-col items-start gap-2 text-sm">
        <div className="flex gap-2 font-medium leading-none">
          Non-injuries not included for the sake of visualisation.
        </div>
        <div className="leading-none text-muted-foreground">
          Note the proportionally higher fatal injury count over ocean regions.
        </div>
      </CardFooter>
    </Card>
  )
}



export default function Home() {
  return (
    <div>
      <h1 className="text-3xl font-bold underline">
        mm802 mini project
      </h1>
      <ChartIncType/>
      <ChartIncType2/>
      <ChartDirs/>
      <ChartDirInj/>
      <ChartIByRegion/>
    </div>
  )
}