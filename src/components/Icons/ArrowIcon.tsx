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

import React, { SVGProps } from "react";

const ArrowIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className={`min-icon`}
      fill={"currentcolor"}
      viewBox="0 0 256 256"
      {...props}
    >
      <defs>
        <clipPath id="prefix__a">
          <path d="M0 0h256v256H0z" />
        </clipPath>
      </defs>
      <g clipPath="url(#prefix__a)">
        <path fill="none" d="M0 0h256v256H0z" />
        <path
          data-name="arrow-icn"
          d="M19.795 108.063c-26.394 0-26.394 40.032 0 40.032h167.688l-22.739 22.669c-18.656 18.622 9.725 46.922 28.382 28.316l56.877-56.732a19.991 19.991 0 000-28.548l-56.877-56.716c-18.656-18.6-47.038 9.684-28.382 28.3l22.739 22.68H19.795z"
        />
        <path data-name="Rect\xE1ngulo 863" fill="none" d="M0 0h256v256H0z" />
      </g>
    </svg>
  );
};

export default ArrowIcon;
