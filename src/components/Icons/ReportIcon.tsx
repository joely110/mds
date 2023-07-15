// This file is part of MinIO Design System
// Copyright (c) 2023 MinIO, Inc.
//
// This program is free software: you can redistribute it and/or modify
// it under the terms of the GNU Affero General Public License as published by
// the Free Software Foundation, either version 3 of the License, or
// (at your option) any later version.
//
// This program is distributed in the hope that it will be useful,
// but WITHOUT ANY WARRANTY; without even the implied warranty of
// MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
// GNU Affero General Public License for more details.
//
// You should have received a copy of the GNU Affero General Public License
// along with this program.  If not, see <http://www.gnu.org/licenses/>.

import * as React from "react";
import { SVGProps } from "react";

const ReportIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className={`min-icon`}
    fill={"currentcolor"}
    viewBox="0 0 256 256"
    {...props}
  >
    <g>
      <path d="m23.86,251.88C10.68,251.88,0,241.2,0,228.02c0,0,0,0,0,0V23.92C0,10.74,10.68.06,23.86.06h101.55c.83-.11,1.67-.07,2.48.1,1.92.31,3.64,1.37,4.79,2.95l67.94,67.92c1.38,1.39,2.16,3.26,2.16,5.22v151.77c0,13.18-10.68,23.86-23.85,23.86H23.86ZM17.43,17.49c-1.71,1.7-2.67,4.01-2.66,6.43v204.1c0,5.02,4.07,9.09,9.09,9.09h155.07c5.02,0,9.09-4.07,9.09-9.09h0V83.55c-8.16.07-21.88.18-33.47.18-9.12-.04-16.93-.07-19.93-.26-11.61-.72-15.7-10.07-15.62-16.17V14.83H23.86c-2.41,0-4.73.95-6.43,2.66Zm116.33,49.9c.07,1.12.51,1.26,1.77,1.34,5.31.33,26.4.25,41.88.14l-43.66-43.66v42.18Zm-19.02,145.26c0-4.65,1.82-9.12,5.08-12.44l-19.12-24.81c-4.82,2.39-10.11,3.67-15.49,3.74l-.74,13.62c4.03,2.83,5,8.39,2.18,12.41-2.83,4.03-8.39,5-12.41,2.18-4.03-2.83-5-8.39-2.18-12.41,1.67-2.38,4.39-3.79,7.3-3.79.06,0,.12,0,.18,0l.67-12.28c-19.79-2.47-33.84-20.52-31.37-40.31,2.47-19.79,20.52-33.84,40.31-31.37,19.79,2.47,33.84,20.52,31.37,40.31-.23,1.85-.61,3.69-1.12,5.48l21.44,3.11c1.92-4.23,6.13-6.96,10.78-6.97,6.96,0,13.09,5.64,13.09,12.6,0,6.96-5.65,12.61-12.61,12.6-6.96,0-12.6-5.64-12.6-12.6,0-.25.02-.5.04-.75l-21.9-3.18c-2.73,6.07-7.08,11.28-12.57,15.05l18.73,24.31c2.64-1.68,5.66-2.64,8.78-2.81,9.85,0,17.83,8.47,17.83,18.31,0,9.85-7.98,17.83-17.83,17.83-9.84,0-17.82-7.98-17.83-17.83h0ZM31,89.49v-12.5h71.32v12.5H31Zm0-20.75v-12.5h71.32v12.5H31Zm0-20.75v-12.5h71.32v12.5H31Z" />
      <path d="m95.04,94.81c4.58,0,9.11.91,13.32,2.69,4.07,1.72,7.76,4.21,10.88,7.33,3.13,3.12,5.62,6.81,7.33,10.87,1.78,4.21,2.7,8.74,2.69,13.32,0,2.97-.39,5.93-1.15,8.8l18.94,2.75c1.94-3.95,5.96-6.45,10.36-6.45,1.67,0,3.32.33,4.86.96,1.51.62,2.88,1.51,4.06,2.63,2.43,2.25,3.82,5.4,3.84,8.71,0,6.8-5.52,12.3-12.32,12.31-3.27,0-6.4-1.29-8.71-3.6-2.32-2.3-3.62-5.44-3.61-8.7v-.21l-19.46-2.83c-2.51,5.41-6.38,10.06-11.23,13.52l16.79,21.79c2.43-1.48,5.19-2.32,8.03-2.45,2.31,0,4.59.48,6.7,1.42,2.05.92,3.9,2.22,5.46,3.84,1.57,1.62,2.81,3.53,3.67,5.61.89,2.14,1.35,4.43,1.35,6.75.01,4.56-1.8,8.93-5.03,12.14-3.21,3.23-7.59,5.04-12.14,5.03-4.56.01-8.93-1.8-12.15-5.03-3.23-3.21-5.04-7.58-5.03-12.14,0-4.31,1.62-8.47,4.55-11.63l-17.23-22.36c-4.29,2.06-8.97,3.19-13.72,3.33l-.65,11.86c2.22,1.68,3.52,4.29,3.52,7.07,0,4.9-3.97,8.86-8.87,8.87-4.9,0-8.86-3.97-8.87-8.87,0-4.75,3.75-8.66,8.5-8.86l.56-10.38c-8.04-1.12-15.41-5.07-20.81-11.14-5.58-6.26-8.66-14.35-8.66-22.74,0-4.57.91-9.1,2.69-13.32,1.72-4.07,4.21-7.76,7.33-10.87,3.12-3.12,6.81-5.61,10.88-7.33,4.21-1.78,8.74-2.7,13.31-2.7Zm52.65,47l-21.03-3.05.18-.63c.85-2.96,1.28-6.03,1.28-9.11,0-4.42-.88-8.8-2.6-12.87-1.66-3.93-4.07-7.5-7.09-10.51-3.01-3.02-6.59-5.43-10.52-7.09-4.07-1.72-8.45-2.61-12.88-2.6-4.42,0-8.8.88-12.88,2.6-3.93,1.66-7.5,4.07-10.52,7.09-3.02,3.01-5.43,6.58-7.1,10.51-1.72,4.07-2.61,8.45-2.6,12.87,0,8.1,2.98,15.93,8.37,21.98,5.33,5.99,12.66,9.85,20.63,10.83l.53.07-.68,12.53-.56-.02h-.14c-4.27,0-7.73,3.46-7.74,7.73,0,4.27,3.47,7.73,7.74,7.73,4.27,0,7.73-3.46,7.74-7.73,0-2.52-1.24-4.88-3.3-6.33l-.26-.18.74-13.53h.53c4.93-.07,9.78-1.24,14.19-3.43l.42-.21,18.39,23.88-.34.35c-2.93,2.99-4.57,7.01-4.57,11.2,0,4.25,1.68,8.33,4.7,11.33,3,3.02,7.09,4.71,11.34,4.7,4.26.01,8.34-1.68,11.34-4.7,3.02-3,4.71-7.08,4.7-11.33,0-2.17-.43-4.32-1.26-6.32-.81-1.95-1.98-3.74-3.44-5.26-2.94-3.12-7.04-4.9-11.33-4.92-2.81.16-5.53,1.03-7.9,2.54l-.43.24-.3-.39-17.82-23.13.49-.34c5.03-3.45,9.02-8.21,11.51-13.78l.18-.39.42.06,20.91,3.04-.03.52c0,.07,0,.14-.01.21-.01.16-.02.31-.02.46,0,6.17,5.01,11.17,11.18,11.17,6.17,0,11.17-5,11.18-11.17-.02-3-1.28-5.86-3.49-7.89-2.2-2.09-5.11-3.26-8.14-3.28-4.12.01-7.85,2.43-9.54,6.18l-.18.37Z" />
    </g>
  </svg>
);

export default ReportIcon;
