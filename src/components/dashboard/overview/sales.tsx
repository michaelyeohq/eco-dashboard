'use client';

import * as React from 'react';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardHeader from '@mui/material/CardHeader';
import Divider from '@mui/material/Divider';
import type { SxProps } from '@mui/material/styles';
import { ArrowClockwise as ArrowClockwiseIcon } from '@phosphor-icons/react/dist/ssr/ArrowClockwise';
import { Map, Layer, Feature } from 'react-mapbox-gl'

export interface SalesProps {
  chartSeries: { name: string; data: number[] }[];
  sx?: SxProps;
}

export function Sales({ sx }: SalesProps): React.JSX.Element {

  const ReactMap = Map({
    accessToken: "pk.eyJ1IjoibWljaGFlbHllbyIsImEiOiJjbHR1Y2IzOHkxZGVyMmlwYzR3bHl5MGpjIn0.w65MHF6O3-9fv9xTkqkc6w"
  })

  return (
    <Card sx={sx}>
      <CardHeader
        action={
          <Button color="inherit" size="small" startIcon={<ArrowClockwiseIcon fontSize="var(--icon-fontSize-md)" />}>
            Sync
          </Button>
        }
        title="Map"
      />

      <CardContent>
        {/* <Chart height={350} options={chartOptions} series={chartSeries} type="bar" width="100%" /> */}
        <ReactMap
          style="mapbox://styles/mapbox/streets-v9"
          containerStyle={{
            height: '100vh',
            width: '100vw'
          }}
        >
          <Layer type="symbol" id="marker" layout={{ 'icon-image': 'marker-15' }}>
            <Feature coordinates={[-0.481747846041145, 51.3233379650232]} />
          </Layer>
        </ReactMap>;
      </CardContent>

      <Divider />
      {/* <CardActions sx={{ justifyContent: 'flex-end' }}>
        <Button color="inherit" endIcon={<ArrowRightIcon fontSize="var(--icon-fontSize-md)" />} size="small">
          Overview
        </Button>
      </CardActions> */}
    </Card>
  );
}


