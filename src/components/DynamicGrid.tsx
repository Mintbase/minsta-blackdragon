export const DynamicGrid = ({
  children,
  nCols,
  nColsXl,
  nColsXXl,
  mdCols,
  lgCols,
  nColsXXXl,
  noMargin,
  nGap,
  nGapMobile,
}: {
  children: any;
  nCols?: any;
  nColsXl?: any;
  nColsXXl?: any;
  mdCols?: any;
  lgCols?: any;
  noMargin?: any;
  nColsXXXl?: any;
  nGap?: any;
  nGapMobile?: any;
}) => {
  const colsXXl = nColsXXl ? `xxl:grid-cols-${nColsXXl} ` : `xxl:grid-cols-5`;

  const colsMd = mdCols ? `md:grid-cols-${mdCols}` : ` md:grid-cols-2`;
  const colsLg = lgCols ? `lg:grid-cols-${lgCols}` : `lg:grid-cols-3`;
  const colsXl = nColsXl ? `xl:grid-cols-${nColsXl} ` : `xl:grid-cols-4`;

  const cols = nCols ? `grid-cols-${nCols}` : `grid-cols-1`;
  const margin = noMargin ? `mb-24` : `my-24`;

  const colsXXXL = nColsXXXl
    ? `xxxl:grid-cols-${nColsXXXl}`
    : `xxxl:grid-cols-6`;

  const gapSizeMobile = nGapMobile ? `gap-${nGapMobile}` : "gap-6";

  const gapSize = nGap ? `gap-${nGap}` : "gap-6";

  return (
    <ul
      className={`grid ${cols} ${colsMd} ${colsLg} ${colsXl} ${colsXXl} ${colsXXXL} ${gapSizeMobile} md:${gapSize} ${margin} w-full`}
    >
      {children}
    </ul>
  );
};
