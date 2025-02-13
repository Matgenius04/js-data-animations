let temperatureUTC = [[Date.UTC(1900,0,1),-0.35],
[Date.UTC(1900,1,1),-0.05],
[Date.UTC(1900,2,1),0.01],
[Date.UTC(1900,3,1),-0.09],
[Date.UTC(1900,4,1),-0.08],
[Date.UTC(1900,5,1),-0.1],
[Date.UTC(1900,6,1),-0.13],
[Date.UTC(1900,7,1),-0.09],
[Date.UTC(1900,8,1),-0.05],
[Date.UTC(1900,9,1),0.1],
[Date.UTC(1900,10,1),-0.07],
[Date.UTC(1900,11,1),-0.06],
[Date.UTC(1901,0,1),-0.23],
[Date.UTC(1901,1,1),-0.11],
[Date.UTC(1901,2,1),0.06],
[Date.UTC(1901,3,1),-0.02],
[Date.UTC(1901,4,1),-0.16],
[Date.UTC(1901,5,1),-0.12],
[Date.UTC(1901,6,1),-0.15],
[Date.UTC(1901,7,1),-0.2],
[Date.UTC(1901,8,1),-0.22],
[Date.UTC(1901,9,1),-0.3],
[Date.UTC(1901,10,1),-0.18],
[Date.UTC(1901,11,1),-0.28],
[Date.UTC(1902,0,1),-0.19],
[Date.UTC(1902,1,1),-0.07],
[Date.UTC(1902,2,1),-0.28],
[Date.UTC(1902,3,1),-0.28],
[Date.UTC(1902,4,1),-0.32],
[Date.UTC(1902,5,1),-0.31],
[Date.UTC(1902,6,1),-0.29],
[Date.UTC(1902,7,1),-0.3],
[Date.UTC(1902,8,1),-0.3],
[Date.UTC(1902,9,1),-0.3],
[Date.UTC(1902,10,1),-0.36],
[Date.UTC(1902,11,1),-0.42],
[Date.UTC(1903,0,1),-0.24],
[Date.UTC(1903,1,1),-0.06],
[Date.UTC(1903,2,1),-0.23],
[Date.UTC(1903,3,1),-0.41],
[Date.UTC(1903,4,1),-0.4],
[Date.UTC(1903,5,1),-0.42],
[Date.UTC(1903,6,1),-0.36],
[Date.UTC(1903,7,1),-0.45],
[Date.UTC(1903,8,1),-0.5],
[Date.UTC(1903,9,1),-0.49],
[Date.UTC(1903,10,1),-0.43],
[Date.UTC(1903,11,1),-0.51],
[Date.UTC(1904,0,1),-0.64],
[Date.UTC(1904,1,1),-0.58],
[Date.UTC(1904,2,1),-0.49],
[Date.UTC(1904,3,1),-0.5],
[Date.UTC(1904,4,1),-0.52],
[Date.UTC(1904,5,1),-0.49],
[Date.UTC(1904,6,1),-0.52],
[Date.UTC(1904,7,1),-0.49],
[Date.UTC(1904,8,1),-0.56],
[Date.UTC(1904,9,1),-0.4],
[Date.UTC(1904,10,1),-0.18],
[Date.UTC(1904,11,1),-0.34],
[Date.UTC(1905,0,1),-0.35],
[Date.UTC(1905,1,1),-0.6],
[Date.UTC(1905,2,1),-0.22],
[Date.UTC(1905,3,1),-0.33],
[Date.UTC(1905,4,1),-0.3],
[Date.UTC(1905,5,1),-0.28],
[Date.UTC(1905,6,1),-0.27],
[Date.UTC(1905,7,1),-0.21],
[Date.UTC(1905,8,1),-0.2],
[Date.UTC(1905,9,1),-0.25],
[Date.UTC(1905,10,1),-0.07],
[Date.UTC(1905,11,1),-0.14],
[Date.UTC(1906,0,1),-0.28],
[Date.UTC(1906,1,1),-0.31],
[Date.UTC(1906,2,1),-0.19],
[Date.UTC(1906,3,1),-0.05],
[Date.UTC(1906,4,1),-0.26],
[Date.UTC(1906,5,1),-0.2],
[Date.UTC(1906,6,1),-0.24],
[Date.UTC(1906,7,1),-0.2],
[Date.UTC(1906,8,1),-0.29],
[Date.UTC(1906,9,1),-0.21],
[Date.UTC(1906,10,1),-0.38],
[Date.UTC(1906,11,1),-0.15],
[Date.UTC(1907,0,1),-0.43],
[Date.UTC(1907,1,1),-0.52],
[Date.UTC(1907,2,1),-0.28],
[Date.UTC(1907,3,1),-0.38],
[Date.UTC(1907,4,1),-0.47],
[Date.UTC(1907,5,1),-0.42],
[Date.UTC(1907,6,1),-0.35],
[Date.UTC(1907,7,1),-0.34],
[Date.UTC(1907,8,1),-0.35],
[Date.UTC(1907,9,1),-0.24],
[Date.UTC(1907,10,1),-0.48],
[Date.UTC(1907,11,1),-0.48],
[Date.UTC(1908,0,1),-0.45],
[Date.UTC(1908,1,1),-0.33],
[Date.UTC(1908,2,1),-0.56],
[Date.UTC(1908,3,1),-0.45],
[Date.UTC(1908,4,1),-0.38],
[Date.UTC(1908,5,1),-0.38],
[Date.UTC(1908,6,1),-0.36],
[Date.UTC(1908,7,1),-0.46],
[Date.UTC(1908,8,1),-0.36],
[Date.UTC(1908,9,1),-0.45],
[Date.UTC(1908,10,1),-0.52],
[Date.UTC(1908,11,1),-0.5],
[Date.UTC(1909,0,1),-0.73],
[Date.UTC(1909,1,1),-0.47],
[Date.UTC(1909,2,1),-0.55],
[Date.UTC(1909,3,1),-0.59],
[Date.UTC(1909,4,1),-0.55],
[Date.UTC(1909,5,1),-0.52],
[Date.UTC(1909,6,1),-0.46],
[Date.UTC(1909,7,1),-0.34],
[Date.UTC(1909,8,1),-0.39],
[Date.UTC(1909,9,1),-0.4],
[Date.UTC(1909,10,1),-0.32],
[Date.UTC(1909,11,1),-0.57],
[Date.UTC(1910,0,1),-0.43],
[Date.UTC(1910,1,1),-0.43],
[Date.UTC(1910,2,1),-0.51],
[Date.UTC(1910,3,1),-0.43],
[Date.UTC(1910,4,1),-0.35],
[Date.UTC(1910,5,1),-0.39],
[Date.UTC(1910,6,1),-0.35],
[Date.UTC(1910,7,1),-0.37],
[Date.UTC(1910,8,1),-0.39],
[Date.UTC(1910,9,1),-0.42],
[Date.UTC(1910,10,1),-0.56],
[Date.UTC(1910,11,1),-0.68],
[Date.UTC(1911,0,1),-0.63],
[Date.UTC(1911,1,1),-0.58],
[Date.UTC(1911,2,1),-0.62],
[Date.UTC(1911,3,1),-0.54],
[Date.UTC(1911,4,1),-0.52],
[Date.UTC(1911,5,1),-0.5],
[Date.UTC(1911,6,1),-0.42],
[Date.UTC(1911,7,1),-0.44],
[Date.UTC(1911,8,1),-0.41],
[Date.UTC(1911,9,1),-0.27],
[Date.UTC(1911,10,1),-0.21],
[Date.UTC(1911,11,1),-0.22],
[Date.UTC(1912,0,1),-0.26],
[Date.UTC(1912,1,1),-0.14],
[Date.UTC(1912,2,1),-0.38],
[Date.UTC(1912,3,1),-0.18],
[Date.UTC(1912,4,1),-0.22],
[Date.UTC(1912,5,1),-0.24],
[Date.UTC(1912,6,1),-0.43],
[Date.UTC(1912,7,1),-0.55],
[Date.UTC(1912,8,1),-0.58],
[Date.UTC(1912,9,1),-0.59],
[Date.UTC(1912,10,1),-0.39],
[Date.UTC(1912,11,1),-0.44],
[Date.UTC(1913,0,1),-0.4],
[Date.UTC(1913,1,1),-0.46],
[Date.UTC(1913,2,1),-0.43],
[Date.UTC(1913,3,1),-0.4],
[Date.UTC(1913,4,1),-0.45],
[Date.UTC(1913,5,1),-0.46],
[Date.UTC(1913,6,1),-0.37],
[Date.UTC(1913,7,1),-0.33],
[Date.UTC(1913,8,1),-0.36],
[Date.UTC(1913,9,1),-0.33],
[Date.UTC(1913,10,1),-0.21],
[Date.UTC(1913,11,1),-0.03],
[Date.UTC(1914,0,1),0.04],
[Date.UTC(1914,1,1),-0.1],
[Date.UTC(1914,2,1),-0.25],
[Date.UTC(1914,3,1),-0.3],
[Date.UTC(1914,4,1),-0.22],
[Date.UTC(1914,5,1),-0.26],
[Date.UTC(1914,6,1),-0.24],
[Date.UTC(1914,7,1),-0.17],
[Date.UTC(1914,8,1),-0.18],
[Date.UTC(1914,9,1),-0.04],
[Date.UTC(1914,10,1),-0.16],
[Date.UTC(1914,11,1),-0.05],
[Date.UTC(1915,0,1),-0.21],
[Date.UTC(1915,1,1),-0.04],
[Date.UTC(1915,2,1),-0.1],
[Date.UTC(1915,3,1),0.05],
[Date.UTC(1915,4,1),-0.06],
[Date.UTC(1915,5,1),-0.22],
[Date.UTC(1915,6,1),-0.13],
[Date.UTC(1915,7,1),-0.22],
[Date.UTC(1915,8,1),-0.21],
[Date.UTC(1915,9,1),-0.25],
[Date.UTC(1915,10,1),-0.13],
[Date.UTC(1915,11,1),-0.22],
[Date.UTC(1916,0,1),-0.13],
[Date.UTC(1916,1,1),-0.15],
[Date.UTC(1916,2,1),-0.28],
[Date.UTC(1916,3,1),-0.31],
[Date.UTC(1916,4,1),-0.35],
[Date.UTC(1916,5,1),-0.5],
[Date.UTC(1916,6,1),-0.37],
[Date.UTC(1916,7,1),-0.28],
[Date.UTC(1916,8,1),-0.37],
[Date.UTC(1916,9,1),-0.33],
[Date.UTC(1916,10,1),-0.47],
[Date.UTC(1916,11,1),-0.82],
[Date.UTC(1917,0,1),-0.57],
[Date.UTC(1917,1,1),-0.63],
[Date.UTC(1917,2,1),-0.65],
[Date.UTC(1917,3,1),-0.56],
[Date.UTC(1917,4,1),-0.56],
[Date.UTC(1917,5,1),-0.44],
[Date.UTC(1917,6,1),-0.26],
[Date.UTC(1917,7,1),-0.23],
[Date.UTC(1917,8,1),-0.24],
[Date.UTC(1917,9,1),-0.45],
[Date.UTC(1917,10,1),-0.34],
[Date.UTC(1917,11,1),-0.68],
[Date.UTC(1918,0,1),-0.48],
[Date.UTC(1918,1,1),-0.35],
[Date.UTC(1918,2,1),-0.26],
[Date.UTC(1918,3,1),-0.45],
[Date.UTC(1918,4,1),-0.44],
[Date.UTC(1918,5,1),-0.37],
[Date.UTC(1918,6,1),-0.32],
[Date.UTC(1918,7,1),-0.32],
[Date.UTC(1918,8,1),-0.19],
[Date.UTC(1918,9,1),-0.07],
[Date.UTC(1918,10,1),-0.12],
[Date.UTC(1918,11,1),-0.3],
[Date.UTC(1919,0,1),-0.21],
[Date.UTC(1919,1,1),-0.25],
[Date.UTC(1919,2,1),-0.22],
[Date.UTC(1919,3,1),-0.13],
[Date.UTC(1919,4,1),-0.29],
[Date.UTC(1919,5,1),-0.37],
[Date.UTC(1919,6,1),-0.3],
[Date.UTC(1919,7,1),-0.34],
[Date.UTC(1919,8,1),-0.26],
[Date.UTC(1919,9,1),-0.21],
[Date.UTC(1919,10,1),-0.42],
[Date.UTC(1919,11,1),-0.43],
[Date.UTC(1920,0,1),-0.25],
[Date.UTC(1920,1,1),-0.27],
[Date.UTC(1920,2,1),-0.13],
[Date.UTC(1920,3,1),-0.25],
[Date.UTC(1920,4,1),-0.28],
[Date.UTC(1920,5,1),-0.36],
[Date.UTC(1920,6,1),-0.31],
[Date.UTC(1920,7,1),-0.28],
[Date.UTC(1920,8,1),-0.23],
[Date.UTC(1920,9,1),-0.28],
[Date.UTC(1920,10,1),-0.28],
[Date.UTC(1920,11,1),-0.47],
[Date.UTC(1921,0,1),-0.05],
[Date.UTC(1921,1,1),-0.18],
[Date.UTC(1921,2,1),-0.24],
[Date.UTC(1921,3,1),-0.31],
[Date.UTC(1921,4,1),-0.31],
[Date.UTC(1921,5,1),-0.28],
[Date.UTC(1921,6,1),-0.15],
[Date.UTC(1921,7,1),-0.26],
[Date.UTC(1921,8,1),-0.2],
[Date.UTC(1921,9,1),-0.04],
[Date.UTC(1921,10,1),-0.14],
[Date.UTC(1921,11,1),-0.18],
[Date.UTC(1922,0,1),-0.33],
[Date.UTC(1922,1,1),-0.45],
[Date.UTC(1922,2,1),-0.15],
[Date.UTC(1922,3,1),-0.23],
[Date.UTC(1922,4,1),-0.34],
[Date.UTC(1922,5,1),-0.31],
[Date.UTC(1922,6,1),-0.28],
[Date.UTC(1922,7,1),-0.33],
[Date.UTC(1922,8,1),-0.37],
[Date.UTC(1922,9,1),-0.33],
[Date.UTC(1922,10,1),-0.15],
[Date.UTC(1922,11,1),-0.19],
[Date.UTC(1923,0,1),-0.29],
[Date.UTC(1923,1,1),-0.4],
[Date.UTC(1923,2,1),-0.34],
[Date.UTC(1923,3,1),-0.42],
[Date.UTC(1923,4,1),-0.34],
[Date.UTC(1923,5,1),-0.3],
[Date.UTC(1923,6,1),-0.31],
[Date.UTC(1923,7,1),-0.33],
[Date.UTC(1923,8,1),-0.32],
[Date.UTC(1923,9,1),-0.14],
[Date.UTC(1923,10,1),-0.03],
[Date.UTC(1923,11,1),-0.05],
[Date.UTC(1924,0,1),-0.24],
[Date.UTC(1924,1,1),-0.24],
[Date.UTC(1924,2,1),-0.09],
[Date.UTC(1924,3,1),-0.32],
[Date.UTC(1924,4,1),-0.19],
[Date.UTC(1924,5,1),-0.27],
[Date.UTC(1924,6,1),-0.3],
[Date.UTC(1924,7,1),-0.36],
[Date.UTC(1924,8,1),-0.33],
[Date.UTC(1924,9,1),-0.36],
[Date.UTC(1924,10,1),-0.22],
[Date.UTC(1924,11,1),-0.43],
[Date.UTC(1925,0,1),-0.39],
[Date.UTC(1925,1,1),-0.41],
[Date.UTC(1925,2,1),-0.28],
[Date.UTC(1925,3,1),-0.26],
[Date.UTC(1925,4,1),-0.3],
[Date.UTC(1925,5,1),-0.33],
[Date.UTC(1925,6,1),-0.27],
[Date.UTC(1925,7,1),-0.2],
[Date.UTC(1925,8,1),-0.2],
[Date.UTC(1925,9,1),-0.18],
[Date.UTC(1925,10,1),0.04],
[Date.UTC(1925,11,1),0.06],
[Date.UTC(1926,0,1),0.2],
[Date.UTC(1926,1,1),0.02],
[Date.UTC(1926,2,1),0.1],
[Date.UTC(1926,3,1),-0.13],
[Date.UTC(1926,4,1),-0.24],
[Date.UTC(1926,5,1),-0.26],
[Date.UTC(1926,6,1),-0.28],
[Date.UTC(1926,7,1),-0.14],
[Date.UTC(1926,8,1),-0.16],
[Date.UTC(1926,9,1),-0.12],
[Date.UTC(1926,10,1),-0.07],
[Date.UTC(1926,11,1),-0.3],
[Date.UTC(1927,0,1),-0.28],
[Date.UTC(1927,1,1),-0.19],
[Date.UTC(1927,2,1),-0.39],
[Date.UTC(1927,3,1),-0.31],
[Date.UTC(1927,4,1),-0.26],
[Date.UTC(1927,5,1),-0.28],
[Date.UTC(1927,6,1),-0.2],
[Date.UTC(1927,7,1),-0.24],
[Date.UTC(1927,8,1),-0.13],
[Date.UTC(1927,9,1),-0.02],
[Date.UTC(1927,10,1),-0.06],
[Date.UTC(1927,11,1),-0.34],
[Date.UTC(1928,0,1),-0.03],
[Date.UTC(1928,1,1),-0.09],
[Date.UTC(1928,2,1),-0.26],
[Date.UTC(1928,3,1),-0.29],
[Date.UTC(1928,4,1),-0.3],
[Date.UTC(1928,5,1),-0.39],
[Date.UTC(1928,6,1),-0.2],
[Date.UTC(1928,7,1),-0.23],
[Date.UTC(1928,8,1),-0.22],
[Date.UTC(1928,9,1),-0.2],
[Date.UTC(1928,10,1),-0.09],
[Date.UTC(1928,11,1),-0.17],
[Date.UTC(1929,0,1),-0.46],
[Date.UTC(1929,1,1),-0.59],
[Date.UTC(1929,2,1),-0.34],
[Date.UTC(1929,3,1),-0.42],
[Date.UTC(1929,4,1),-0.39],
[Date.UTC(1929,5,1),-0.44],
[Date.UTC(1929,6,1),-0.37],
[Date.UTC(1929,7,1),-0.32],
[Date.UTC(1929,8,1),-0.26],
[Date.UTC(1929,9,1),-0.15],
[Date.UTC(1929,10,1),-0.12],
[Date.UTC(1929,11,1),-0.55],
[Date.UTC(1930,0,1),-0.3],
[Date.UTC(1930,1,1),-0.27],
[Date.UTC(1930,2,1),-0.12],
[Date.UTC(1930,3,1),-0.26],
[Date.UTC(1930,4,1),-0.25],
[Date.UTC(1930,5,1),-0.22],
[Date.UTC(1930,6,1),-0.22],
[Date.UTC(1930,7,1),-0.16],
[Date.UTC(1930,8,1),-0.16],
[Date.UTC(1930,9,1),-0.12],
[Date.UTC(1930,10,1),0.17],
[Date.UTC(1930,11,1),-0.06],
[Date.UTC(1931,0,1),-0.1],
[Date.UTC(1931,1,1),-0.21],
[Date.UTC(1931,2,1),-0.11],
[Date.UTC(1931,3,1),-0.23],
[Date.UTC(1931,4,1),-0.2],
[Date.UTC(1931,5,1),-0.08],
[Date.UTC(1931,6,1),-0.04],
[Date.UTC(1931,7,1),-0.04],
[Date.UTC(1931,8,1),-0.07],
[Date.UTC(1931,9,1),0.04],
[Date.UTC(1931,10,1),-0.06],
[Date.UTC(1931,11,1),-0.06],
[Date.UTC(1932,0,1),0.14],
[Date.UTC(1932,1,1),-0.18],
[Date.UTC(1932,2,1),-0.18],
[Date.UTC(1932,3,1),-0.06],
[Date.UTC(1932,4,1),-0.18],
[Date.UTC(1932,5,1),-0.29],
[Date.UTC(1932,6,1),-0.25],
[Date.UTC(1932,7,1),-0.22],
[Date.UTC(1932,8,1),-0.11],
[Date.UTC(1932,9,1),-0.09],
[Date.UTC(1932,10,1),-0.28],
[Date.UTC(1932,11,1),-0.26],
[Date.UTC(1933,0,1),-0.24],
[Date.UTC(1933,1,1),-0.3],
[Date.UTC(1933,2,1),-0.3],
[Date.UTC(1933,3,1),-0.25],
[Date.UTC(1933,4,1),-0.3],
[Date.UTC(1933,5,1),-0.35],
[Date.UTC(1933,6,1),-0.21],
[Date.UTC(1933,7,1),-0.24],
[Date.UTC(1933,8,1),-0.3],
[Date.UTC(1933,9,1),-0.26],
[Date.UTC(1933,10,1),-0.31],
[Date.UTC(1933,11,1),-0.45],
[Date.UTC(1934,0,1),-0.22],
[Date.UTC(1934,1,1),-0.03],
[Date.UTC(1934,2,1),-0.3],
[Date.UTC(1934,3,1),-0.31],
[Date.UTC(1934,4,1),-0.1],
[Date.UTC(1934,5,1),-0.16],
[Date.UTC(1934,6,1),-0.11],
[Date.UTC(1934,7,1),-0.13],
[Date.UTC(1934,8,1),-0.16],
[Date.UTC(1934,9,1),-0.07],
[Date.UTC(1934,10,1),0.03],
[Date.UTC(1934,11,1),-0.03],
[Date.UTC(1935,0,1),-0.34],
[Date.UTC(1935,1,1),0.14],
[Date.UTC(1935,2,1),-0.15],
[Date.UTC(1935,3,1),-0.37],
[Date.UTC(1935,4,1),-0.3],
[Date.UTC(1935,5,1),-0.27],
[Date.UTC(1935,6,1),-0.22],
[Date.UTC(1935,7,1),-0.22],
[Date.UTC(1935,8,1),-0.22],
[Date.UTC(1935,9,1),-0.06],
[Date.UTC(1935,10,1),-0.27],
[Date.UTC(1935,11,1),-0.18],
[Date.UTC(1936,0,1),-0.28],
[Date.UTC(1936,1,1),-0.39],
[Date.UTC(1936,2,1),-0.22],
[Date.UTC(1936,3,1),-0.2],
[Date.UTC(1936,4,1),-0.17],
[Date.UTC(1936,5,1),-0.22],
[Date.UTC(1936,6,1),-0.1],
[Date.UTC(1936,7,1),-0.13],
[Date.UTC(1936,8,1),-0.1],
[Date.UTC(1936,9,1),-0.04],
[Date.UTC(1936,10,1),0.01],
[Date.UTC(1936,11,1),-0.02],
[Date.UTC(1937,0,1),-0.08],
[Date.UTC(1937,1,1),0.02],
[Date.UTC(1937,2,1),-0.21],
[Date.UTC(1937,3,1),-0.16],
[Date.UTC(1937,4,1),-0.06],
[Date.UTC(1937,5,1),-0.05],
[Date.UTC(1937,6,1),-0.04],
[Date.UTC(1937,7,1),0.01],
[Date.UTC(1937,8,1),0.08],
[Date.UTC(1937,9,1),0.08],
[Date.UTC(1937,10,1),0.08],
[Date.UTC(1937,11,1),-0.07],
[Date.UTC(1938,0,1),0.08],
[Date.UTC(1938,1,1),0.03],
[Date.UTC(1938,2,1),0.09],
[Date.UTC(1938,3,1),0.05],
[Date.UTC(1938,4,1),-0.1],
[Date.UTC(1938,5,1),-0.18],
[Date.UTC(1938,6,1),-0.1],
[Date.UTC(1938,7,1),-0.06],
[Date.UTC(1938,8,1),0],
[Date.UTC(1938,9,1),0.14],
[Date.UTC(1938,10,1),0.07],
[Date.UTC(1938,11,1),-0.13],
[Date.UTC(1939,0,1),-0.06],
[Date.UTC(1939,1,1),-0.07],
[Date.UTC(1939,2,1),-0.18],
[Date.UTC(1939,3,1),-0.1],
[Date.UTC(1939,4,1),-0.05],
[Date.UTC(1939,5,1),-0.07],
[Date.UTC(1939,6,1),-0.06],
[Date.UTC(1939,7,1),-0.06],
[Date.UTC(1939,8,1),-0.08],
[Date.UTC(1939,9,1),-0.04],
[Date.UTC(1939,10,1),0.06],
[Date.UTC(1939,11,1),0.43],
[Date.UTC(1940,0,1),-0.01],
[Date.UTC(1940,1,1),0.08],
[Date.UTC(1940,2,1),0.09],
[Date.UTC(1940,3,1),0.17],
[Date.UTC(1940,4,1),0.1],
[Date.UTC(1940,5,1),0.11],
[Date.UTC(1940,6,1),0.12],
[Date.UTC(1940,7,1),0.07],
[Date.UTC(1940,8,1),0.15],
[Date.UTC(1940,9,1),0.11],
[Date.UTC(1940,10,1),0.16],
[Date.UTC(1940,11,1),0.31],
[Date.UTC(1941,0,1),0.18],
[Date.UTC(1941,1,1),0.31],
[Date.UTC(1941,2,1),0.09],
[Date.UTC(1941,3,1),0.16],
[Date.UTC(1941,4,1),0.16],
[Date.UTC(1941,5,1),0.12],
[Date.UTC(1941,6,1),0.21],
[Date.UTC(1941,7,1),0.15],
[Date.UTC(1941,8,1),0.02],
[Date.UTC(1941,9,1),0.34],
[Date.UTC(1941,10,1),0.22],
[Date.UTC(1941,11,1),0.21],
[Date.UTC(1942,0,1),0.29],
[Date.UTC(1942,1,1),0.02],
[Date.UTC(1942,2,1),0.05],
[Date.UTC(1942,3,1),0.09],
[Date.UTC(1942,4,1),0.1],
[Date.UTC(1942,5,1),0.04],
[Date.UTC(1942,6,1),0],
[Date.UTC(1942,7,1),-0.04],
[Date.UTC(1942,8,1),-0.04],
[Date.UTC(1942,9,1),0.01],
[Date.UTC(1942,10,1),0.09],
[Date.UTC(1942,11,1),0.12],
[Date.UTC(1943,0,1),-0.01],
[Date.UTC(1943,1,1),0.17],
[Date.UTC(1943,2,1),-0.04],
[Date.UTC(1943,3,1),0.1],
[Date.UTC(1943,4,1),0.06],
[Date.UTC(1943,5,1),-0.06],
[Date.UTC(1943,6,1),0.08],
[Date.UTC(1943,7,1),0.01],
[Date.UTC(1943,8,1),0.05],
[Date.UTC(1943,9,1),0.22],
[Date.UTC(1943,10,1),0.19],
[Date.UTC(1943,11,1),0.23],
[Date.UTC(1944,0,1),0.36],
[Date.UTC(1944,1,1),0.24],
[Date.UTC(1944,2,1),0.26],
[Date.UTC(1944,3,1),0.19],
[Date.UTC(1944,4,1),0.18],
[Date.UTC(1944,5,1),0.15],
[Date.UTC(1944,6,1),0.17],
[Date.UTC(1944,7,1),0.18],
[Date.UTC(1944,8,1),0.27],
[Date.UTC(1944,9,1),0.26],
[Date.UTC(1944,10,1),0.1],
[Date.UTC(1944,11,1),0.03],
[Date.UTC(1945,0,1),0.09],
[Date.UTC(1945,1,1),0],
[Date.UTC(1945,2,1),0.05],
[Date.UTC(1945,3,1),0.19],
[Date.UTC(1945,4,1),0.05],
[Date.UTC(1945,5,1),0],
[Date.UTC(1945,6,1),0.03],
[Date.UTC(1945,7,1),0.26],
[Date.UTC(1945,8,1),0.2],
[Date.UTC(1945,9,1),0.18],
[Date.UTC(1945,10,1),0.06],
[Date.UTC(1945,11,1),-0.07],
[Date.UTC(1946,0,1),0.15],
[Date.UTC(1946,1,1),0.02],
[Date.UTC(1946,2,1),0.01],
[Date.UTC(1946,3,1),0.05],
[Date.UTC(1946,4,1),-0.08],
[Date.UTC(1946,5,1),-0.22],
[Date.UTC(1946,6,1),-0.13],
[Date.UTC(1946,7,1),-0.21],
[Date.UTC(1946,8,1),-0.09],
[Date.UTC(1946,9,1),-0.08],
[Date.UTC(1946,10,1),-0.06],
[Date.UTC(1946,11,1),-0.31],
[Date.UTC(1947,0,1),-0.07],
[Date.UTC(1947,1,1),-0.08],
[Date.UTC(1947,2,1),0.06],
[Date.UTC(1947,3,1),0.06],
[Date.UTC(1947,4,1),-0.02],
[Date.UTC(1947,5,1),-0.02],
[Date.UTC(1947,6,1),-0.05],
[Date.UTC(1947,7,1),-0.07],
[Date.UTC(1947,8,1),-0.13],
[Date.UTC(1947,9,1),0.07],
[Date.UTC(1947,10,1),0.02],
[Date.UTC(1947,11,1),-0.14],
[Date.UTC(1948,0,1),0.06],
[Date.UTC(1948,1,1),-0.15],
[Date.UTC(1948,2,1),-0.25],
[Date.UTC(1948,3,1),-0.12],
[Date.UTC(1948,4,1),-0.01],
[Date.UTC(1948,5,1),-0.05],
[Date.UTC(1948,6,1),-0.12],
[Date.UTC(1948,7,1),-0.12],
[Date.UTC(1948,8,1),-0.15],
[Date.UTC(1948,9,1),-0.06],
[Date.UTC(1948,10,1),-0.13],
[Date.UTC(1948,11,1),-0.24],
[Date.UTC(1949,0,1),0.06],
[Date.UTC(1949,1,1),-0.15],
[Date.UTC(1949,2,1),-0.03],
[Date.UTC(1949,3,1),-0.11],
[Date.UTC(1949,4,1),-0.11],
[Date.UTC(1949,5,1),-0.28],
[Date.UTC(1949,6,1),-0.13],
[Date.UTC(1949,7,1),-0.13],
[Date.UTC(1949,8,1),-0.15],
[Date.UTC(1949,9,1),-0.07],
[Date.UTC(1949,10,1),-0.11],
[Date.UTC(1949,11,1),-0.18],
[Date.UTC(1950,0,1),-0.26],
[Date.UTC(1950,1,1),-0.27],
[Date.UTC(1950,2,1),-0.08],
[Date.UTC(1950,3,1),-0.21],
[Date.UTC(1950,4,1),-0.12],
[Date.UTC(1950,5,1),-0.05],
[Date.UTC(1950,6,1),-0.09],
[Date.UTC(1950,7,1),-0.16],
[Date.UTC(1950,8,1),-0.12],
[Date.UTC(1950,9,1),-0.21],
[Date.UTC(1950,10,1),-0.34],
[Date.UTC(1950,11,1),-0.22],
[Date.UTC(1951,0,1),-0.34],
[Date.UTC(1951,1,1),-0.42],
[Date.UTC(1951,2,1),-0.21],
[Date.UTC(1951,3,1),-0.14],
[Date.UTC(1951,4,1),-0.01],
[Date.UTC(1951,5,1),-0.07],
[Date.UTC(1951,6,1),-0.01],
[Date.UTC(1951,7,1),0.06],
[Date.UTC(1951,8,1),0.05],
[Date.UTC(1951,9,1),0.07],
[Date.UTC(1951,10,1),-0.01],
[Date.UTC(1951,11,1),0.15],
[Date.UTC(1952,0,1),0.11],
[Date.UTC(1952,1,1),0.11],
[Date.UTC(1952,2,1),-0.08],
[Date.UTC(1952,3,1),0.03],
[Date.UTC(1952,4,1),-0.03],
[Date.UTC(1952,5,1),-0.03],
[Date.UTC(1952,6,1),0.04],
[Date.UTC(1952,7,1),0.05],
[Date.UTC(1952,8,1),0.06],
[Date.UTC(1952,9,1),-0.01],
[Date.UTC(1952,10,1),-0.13],
[Date.UTC(1952,11,1),-0.02],
[Date.UTC(1953,0,1),0.07],
[Date.UTC(1953,1,1),0.14],
[Date.UTC(1953,2,1),0.1],
[Date.UTC(1953,3,1),0.19],
[Date.UTC(1953,4,1),0.11],
[Date.UTC(1953,5,1),0.11],
[Date.UTC(1953,6,1),0],
[Date.UTC(1953,7,1),0.05],
[Date.UTC(1953,8,1),0.04],
[Date.UTC(1953,9,1),0.07],
[Date.UTC(1953,10,1),-0.03],
[Date.UTC(1953,11,1),0.04],
[Date.UTC(1954,0,1),-0.24],
[Date.UTC(1954,1,1),-0.1],
[Date.UTC(1954,2,1),-0.15],
[Date.UTC(1954,3,1),-0.14],
[Date.UTC(1954,4,1),-0.2],
[Date.UTC(1954,5,1),-0.19],
[Date.UTC(1954,6,1),-0.19],
[Date.UTC(1954,7,1),-0.18],
[Date.UTC(1954,8,1),-0.1],
[Date.UTC(1954,9,1),-0.02],
[Date.UTC(1954,10,1),0.08],
[Date.UTC(1954,11,1),-0.18],
[Date.UTC(1955,0,1),0.13],
[Date.UTC(1955,1,1),-0.16],
[Date.UTC(1955,2,1),-0.32],
[Date.UTC(1955,3,1),-0.22],
[Date.UTC(1955,4,1),-0.2],
[Date.UTC(1955,5,1),-0.14],
[Date.UTC(1955,6,1),-0.12],
[Date.UTC(1955,7,1),0.02],
[Date.UTC(1955,8,1),-0.11],
[Date.UTC(1955,9,1),-0.06],
[Date.UTC(1955,10,1),-0.25],
[Date.UTC(1955,11,1),-0.28],
[Date.UTC(1956,0,1),-0.13],
[Date.UTC(1956,1,1),-0.24],
[Date.UTC(1956,2,1),-0.21],
[Date.UTC(1956,3,1),-0.28],
[Date.UTC(1956,4,1),-0.29],
[Date.UTC(1956,5,1),-0.16],
[Date.UTC(1956,6,1),-0.09],
[Date.UTC(1956,7,1),-0.26],
[Date.UTC(1956,8,1),-0.19],
[Date.UTC(1956,9,1),-0.23],
[Date.UTC(1956,10,1),-0.15],
[Date.UTC(1956,11,1),-0.06],
[Date.UTC(1957,0,1),-0.09],
[Date.UTC(1957,1,1),-0.03],
[Date.UTC(1957,2,1),-0.04],
[Date.UTC(1957,3,1),0.01],
[Date.UTC(1957,4,1),0.09],
[Date.UTC(1957,5,1),0.16],
[Date.UTC(1957,6,1),0.03],
[Date.UTC(1957,7,1),0.13],
[Date.UTC(1957,8,1),0.07],
[Date.UTC(1957,9,1),0],
[Date.UTC(1957,10,1),0.07],
[Date.UTC(1957,11,1),0.14],
[Date.UTC(1958,0,1),0.39],
[Date.UTC(1958,1,1),0.21],
[Date.UTC(1958,2,1),0.09],
[Date.UTC(1958,3,1),0.01],
[Date.UTC(1958,4,1),0.05],
[Date.UTC(1958,5,1),-0.07],
[Date.UTC(1958,6,1),0.06],
[Date.UTC(1958,7,1),-0.03],
[Date.UTC(1958,8,1),-0.02],
[Date.UTC(1958,9,1),0.04],
[Date.UTC(1958,10,1),0.02],
[Date.UTC(1958,11,1),0.01],
[Date.UTC(1959,0,1),0.08],
[Date.UTC(1959,1,1),0.07],
[Date.UTC(1959,2,1),0.17],
[Date.UTC(1959,3,1),0.14],
[Date.UTC(1959,4,1),0.05],
[Date.UTC(1959,5,1),0.03],
[Date.UTC(1959,6,1),0.03],
[Date.UTC(1959,7,1),0],
[Date.UTC(1959,8,1),-0.06],
[Date.UTC(1959,9,1),-0.06],
[Date.UTC(1959,10,1),-0.08],
[Date.UTC(1959,11,1),-0.01],
[Date.UTC(1960,0,1),0],
[Date.UTC(1960,1,1),0.14],
[Date.UTC(1960,2,1),-0.34],
[Date.UTC(1960,3,1),-0.15],
[Date.UTC(1960,4,1),-0.08],
[Date.UTC(1960,5,1),-0.05],
[Date.UTC(1960,6,1),-0.04],
[Date.UTC(1960,7,1),0.03],
[Date.UTC(1960,8,1),0.06],
[Date.UTC(1960,9,1),0.05],
[Date.UTC(1960,10,1),-0.11],
[Date.UTC(1960,11,1),0.19],
[Date.UTC(1961,0,1),0.07],
[Date.UTC(1961,1,1),0.19],
[Date.UTC(1961,2,1),0.1],
[Date.UTC(1961,3,1),0.12],
[Date.UTC(1961,4,1),0.13],
[Date.UTC(1961,5,1),0.11],
[Date.UTC(1961,6,1),0.01],
[Date.UTC(1961,7,1),0.01],
[Date.UTC(1961,8,1),0.08],
[Date.UTC(1961,9,1),0.02],
[Date.UTC(1961,10,1),0.03],
[Date.UTC(1961,11,1),-0.16],
[Date.UTC(1962,0,1),0.06],
[Date.UTC(1962,1,1),0.16],
[Date.UTC(1962,2,1),0.11],
[Date.UTC(1962,3,1),0.06],
[Date.UTC(1962,4,1),-0.07],
[Date.UTC(1962,5,1),0.05],
[Date.UTC(1962,6,1),0.02],
[Date.UTC(1962,7,1),-0.02],
[Date.UTC(1962,8,1),0.02],
[Date.UTC(1962,9,1),0.02],
[Date.UTC(1962,10,1),0.06],
[Date.UTC(1962,11,1),-0.03],
[Date.UTC(1963,0,1),-0.03],
[Date.UTC(1963,1,1),0.19],
[Date.UTC(1963,2,1),-0.13],
[Date.UTC(1963,3,1),-0.07],
[Date.UTC(1963,4,1),-0.06],
[Date.UTC(1963,5,1),0.03],
[Date.UTC(1963,6,1),0.07],
[Date.UTC(1963,7,1),0.22],
[Date.UTC(1963,8,1),0.18],
[Date.UTC(1963,9,1),0.14],
[Date.UTC(1963,10,1),0.14],
[Date.UTC(1963,11,1),-0.03],
[Date.UTC(1964,0,1),-0.09],
[Date.UTC(1964,1,1),-0.1],
[Date.UTC(1964,2,1),-0.22],
[Date.UTC(1964,3,1),-0.32],
[Date.UTC(1964,4,1),-0.25],
[Date.UTC(1964,5,1),-0.05],
[Date.UTC(1964,6,1),-0.05],
[Date.UTC(1964,7,1),-0.21],
[Date.UTC(1964,8,1),-0.3],
[Date.UTC(1964,9,1),-0.31],
[Date.UTC(1964,10,1),-0.22],
[Date.UTC(1964,11,1),-0.3],
[Date.UTC(1965,0,1),-0.08],
[Date.UTC(1965,1,1),-0.17],
[Date.UTC(1965,2,1),-0.13],
[Date.UTC(1965,3,1),-0.2],
[Date.UTC(1965,4,1),-0.11],
[Date.UTC(1965,5,1),-0.08],
[Date.UTC(1965,6,1),-0.14],
[Date.UTC(1965,7,1),-0.05],
[Date.UTC(1965,8,1),-0.14],
[Date.UTC(1965,9,1),-0.06],
[Date.UTC(1965,10,1),-0.06],
[Date.UTC(1965,11,1),-0.08],
[Date.UTC(1966,0,1),-0.19],
[Date.UTC(1966,1,1),-0.05],
[Date.UTC(1966,2,1),0.03],
[Date.UTC(1966,3,1),-0.14],
[Date.UTC(1966,4,1),-0.12],
[Date.UTC(1966,5,1),-0.01],
[Date.UTC(1966,6,1),0.08],
[Date.UTC(1966,7,1),-0.08],
[Date.UTC(1966,8,1),-0.03],
[Date.UTC(1966,9,1),-0.16],
[Date.UTC(1966,10,1),-0.01],
[Date.UTC(1966,11,1),-0.03],
[Date.UTC(1967,0,1),-0.08],
[Date.UTC(1967,1,1),-0.21],
[Date.UTC(1967,2,1),0.05],
[Date.UTC(1967,3,1),-0.04],
[Date.UTC(1967,4,1),0.11],
[Date.UTC(1967,5,1),-0.08],
[Date.UTC(1967,6,1),0.03],
[Date.UTC(1967,7,1),-0.01],
[Date.UTC(1967,8,1),-0.05],
[Date.UTC(1967,9,1),0.1],
[Date.UTC(1967,10,1),-0.04],
[Date.UTC(1967,11,1),-0.05],
[Date.UTC(1968,0,1),-0.26],
[Date.UTC(1968,1,1),-0.15],
[Date.UTC(1968,2,1),0.2],
[Date.UTC(1968,3,1),-0.06],
[Date.UTC(1968,4,1),-0.13],
[Date.UTC(1968,5,1),-0.07],
[Date.UTC(1968,6,1),-0.12],
[Date.UTC(1968,7,1),-0.08],
[Date.UTC(1968,8,1),-0.17],
[Date.UTC(1968,9,1),0.09],
[Date.UTC(1968,10,1),-0.05],
[Date.UTC(1968,11,1),-0.14],
[Date.UTC(1969,0,1),-0.11],
[Date.UTC(1969,1,1),-0.17],
[Date.UTC(1969,2,1),0.01],
[Date.UTC(1969,3,1),0.17],
[Date.UTC(1969,4,1),0.18],
[Date.UTC(1969,5,1),0.04],
[Date.UTC(1969,6,1),-0.04],
[Date.UTC(1969,7,1),0.04],
[Date.UTC(1969,8,1),0.08],
[Date.UTC(1969,9,1),0.1],
[Date.UTC(1969,10,1),0.12],
[Date.UTC(1969,11,1),0.24],
[Date.UTC(1970,0,1),0.08],
[Date.UTC(1970,1,1),0.22],
[Date.UTC(1970,2,1),0.06],
[Date.UTC(1970,3,1),0.05],
[Date.UTC(1970,4,1),-0.04],
[Date.UTC(1970,5,1),-0.03],
[Date.UTC(1970,6,1),0.01],
[Date.UTC(1970,7,1),-0.1],
[Date.UTC(1970,8,1),0.11],
[Date.UTC(1970,9,1),0.03],
[Date.UTC(1970,10,1),0.02],
[Date.UTC(1970,11,1),-0.12],
[Date.UTC(1971,0,1),-0.03],
[Date.UTC(1971,1,1),-0.16],
[Date.UTC(1971,2,1),-0.18],
[Date.UTC(1971,3,1),-0.07],
[Date.UTC(1971,4,1),-0.05],
[Date.UTC(1971,5,1),-0.17],
[Date.UTC(1971,6,1),-0.08],
[Date.UTC(1971,7,1),-0.01],
[Date.UTC(1971,8,1),-0.06],
[Date.UTC(1971,9,1),-0.04],
[Date.UTC(1971,10,1),-0.07],
[Date.UTC(1971,11,1),-0.08],
[Date.UTC(1972,0,1),1000.22],
[Date.UTC(1972,1,1),-0.18],
[Date.UTC(1972,2,1),0.02],
[Date.UTC(1972,3,1),0],
[Date.UTC(1972,4,1),-0.03],
[Date.UTC(1972,5,1),0.04],
[Date.UTC(1972,6,1),0.01],
[Date.UTC(1972,7,1),0.16],
[Date.UTC(1972,8,1),0.02],
[Date.UTC(1972,9,1),0.08],
[Date.UTC(1972,10,1),0.03],
[Date.UTC(1972,11,1),0.17],
[Date.UTC(1973,0,1),0.29],
[Date.UTC(1973,1,1),0.33],
[Date.UTC(1973,2,1),0.29],
[Date.UTC(1973,3,1),0.28],
[Date.UTC(1973,4,1),0.23],
[Date.UTC(1973,5,1),0.19],
[Date.UTC(1973,6,1),0.13],
[Date.UTC(1973,7,1),0.05],
[Date.UTC(1973,8,1),0.09],
[Date.UTC(1973,9,1),0.1],
[Date.UTC(1973,10,1),0.05],
[Date.UTC(1973,11,1),-0.06],
[Date.UTC(1974,0,1),-0.1],
[Date.UTC(1974,1,1),-0.27],
[Date.UTC(1974,2,1),-0.05],
[Date.UTC(1974,3,1),-0.11],
[Date.UTC(1974,4,1),-0.04],
[Date.UTC(1974,5,1),-0.05],
[Date.UTC(1974,6,1),-0.03],
[Date.UTC(1974,7,1),0.11],
[Date.UTC(1974,8,1),-0.07],
[Date.UTC(1974,9,1),-0.05],
[Date.UTC(1974,10,1),-0.07],
[Date.UTC(1974,11,1),-0.08],
[Date.UTC(1975,0,1),0.11],
[Date.UTC(1975,1,1),0.08],
[Date.UTC(1975,2,1),0.13],
[Date.UTC(1975,3,1),0.04],
[Date.UTC(1975,4,1),0.16],
[Date.UTC(1975,5,1),-0.01],
[Date.UTC(1975,6,1),-0.01],
[Date.UTC(1975,7,1),-0.17],
[Date.UTC(1975,8,1),-0.03],
[Date.UTC(1975,9,1),-0.11],
[Date.UTC(1975,10,1),-0.17],
[Date.UTC(1975,11,1),-0.17],
[Date.UTC(1976,0,1),-0.03],
[Date.UTC(1976,1,1),-0.06],
[Date.UTC(1976,2,1),-0.21],
[Date.UTC(1976,3,1),-0.07],
[Date.UTC(1976,4,1),-0.2],
[Date.UTC(1976,5,1),-0.12],
[Date.UTC(1976,6,1),-0.1],
[Date.UTC(1976,7,1),-0.12],
[Date.UTC(1976,8,1),-0.06],
[Date.UTC(1976,9,1),-0.24],
[Date.UTC(1976,10,1),-0.06],
[Date.UTC(1976,11,1),0.11],
[Date.UTC(1977,0,1),0.18],
[Date.UTC(1977,1,1),0.23],
[Date.UTC(1977,2,1),0.25],
[Date.UTC(1977,3,1),0.27],
[Date.UTC(1977,4,1),0.33],
[Date.UTC(1977,5,1),0.27],
[Date.UTC(1977,6,1),0.2],
[Date.UTC(1977,7,1),0.18],
[Date.UTC(1977,8,1),0.02],
[Date.UTC(1977,9,1),0.03],
[Date.UTC(1977,10,1),0.16],
[Date.UTC(1977,11,1),0.03],
[Date.UTC(1978,0,1),0.06],
[Date.UTC(1978,1,1),0.1],
[Date.UTC(1978,2,1),0.19],
[Date.UTC(1978,3,1),0.17],
[Date.UTC(1978,4,1),0.09],
[Date.UTC(1978,5,1),-0.01],
[Date.UTC(1978,6,1),0.05],
[Date.UTC(1978,7,1),-0.13],
[Date.UTC(1978,8,1),0.06],
[Date.UTC(1978,9,1),0.03],
[Date.UTC(1978,10,1),0.14],
[Date.UTC(1978,11,1),0.08],
[Date.UTC(1979,0,1),0.09],
[Date.UTC(1979,1,1),-0.1],
[Date.UTC(1979,2,1),0.19],
[Date.UTC(1979,3,1),0.15],
[Date.UTC(1979,4,1),0.04],
[Date.UTC(1979,5,1),0.14],
[Date.UTC(1979,6,1),0.04],
[Date.UTC(1979,7,1),0.17],
[Date.UTC(1979,8,1),0.25],
[Date.UTC(1979,9,1),0.26],
[Date.UTC(1979,10,1),0.29],
[Date.UTC(1979,11,1),0.48],
[Date.UTC(1980,0,1),0.3],
[Date.UTC(1980,1,1),0.4],
[Date.UTC(1980,2,1),0.3],
[Date.UTC(1980,3,1),0.31],
[Date.UTC(1980,4,1),0.35],
[Date.UTC(1980,5,1),0.2],
[Date.UTC(1980,6,1),0.22],
[Date.UTC(1980,7,1),0.19],
[Date.UTC(1980,8,1),0.21],
[Date.UTC(1980,9,1),0.13],
[Date.UTC(1980,10,1),0.3],
[Date.UTC(1980,11,1),0.22],
[Date.UTC(1981,0,1),0.53],
[Date.UTC(1981,1,1),0.42],
[Date.UTC(1981,2,1),0.48],
[Date.UTC(1981,3,1),0.33],
[Date.UTC(1981,4,1),0.25],
[Date.UTC(1981,5,1),0.29],
[Date.UTC(1981,6,1),0.32],
[Date.UTC(1981,7,1),0.35],
[Date.UTC(1981,8,1),0.15],
[Date.UTC(1981,9,1),0.12],
[Date.UTC(1981,10,1),0.23],
[Date.UTC(1981,11,1),0.41],
[Date.UTC(1982,0,1),0.05],
[Date.UTC(1982,1,1),0.16],
[Date.UTC(1982,2,1),0.03],
[Date.UTC(1982,3,1),0.15],
[Date.UTC(1982,4,1),0.18],
[Date.UTC(1982,5,1),0.06],
[Date.UTC(1982,6,1),0.15],
[Date.UTC(1982,7,1),0.04],
[Date.UTC(1982,8,1),0.14],
[Date.UTC(1982,9,1),0.13],
[Date.UTC(1982,10,1),0.18],
[Date.UTC(1982,11,1),0.42],
[Date.UTC(1983,0,1),0.53],
[Date.UTC(1983,1,1),0.43],
[Date.UTC(1983,2,1),0.42],
[Date.UTC(1983,3,1),0.28],
[Date.UTC(1983,4,1),0.33],
[Date.UTC(1983,5,1),0.23],
[Date.UTC(1983,6,1),0.18],
[Date.UTC(1983,7,1),0.35],
[Date.UTC(1983,8,1),0.37],
[Date.UTC(1983,9,1),0.16],
[Date.UTC(1983,10,1),0.3],
[Date.UTC(1983,11,1),0.17],
[Date.UTC(1984,0,1),0.31],
[Date.UTC(1984,1,1),0.14],
[Date.UTC(1984,2,1),0.26],
[Date.UTC(1984,3,1),0.06],
[Date.UTC(1984,4,1),0.33],
[Date.UTC(1984,5,1),0.02],
[Date.UTC(1984,6,1),0.19],
[Date.UTC(1984,7,1),0.19],
[Date.UTC(1984,8,1),0.21],
[Date.UTC(1984,9,1),0.14],
[Date.UTC(1984,10,1),0.07],
[Date.UTC(1984,11,1),-0.04],
[Date.UTC(1985,0,1),0.22],
[Date.UTC(1985,1,1),-0.03],
[Date.UTC(1985,2,1),0.17],
[Date.UTC(1985,3,1),0.12],
[Date.UTC(1985,4,1),0.15],
[Date.UTC(1985,5,1),0.15],
[Date.UTC(1985,6,1),0.04],
[Date.UTC(1985,7,1),0.17],
[Date.UTC(1985,8,1),0.13],
[Date.UTC(1985,9,1),0.11],
[Date.UTC(1985,10,1),0.05],
[Date.UTC(1985,11,1),0.13],
[Date.UTC(1986,0,1),0.28],
[Date.UTC(1986,1,1),0.37],
[Date.UTC(1986,2,1),0.3],
[Date.UTC(1986,3,1),0.23],
[Date.UTC(1986,4,1),0.21],
[Date.UTC(1986,5,1),0.12],
[Date.UTC(1986,6,1),0.11],
[Date.UTC(1986,7,1),0.16],
[Date.UTC(1986,8,1),0.03],
[Date.UTC(1986,9,1),0.15],
[Date.UTC(1986,10,1),0.11],
[Date.UTC(1986,11,1),0.14],
[Date.UTC(1987,0,1),0.33],
[Date.UTC(1987,1,1),0.43],
[Date.UTC(1987,2,1),0.18],
[Date.UTC(1987,3,1),0.25],
[Date.UTC(1987,4,1),0.25],
[Date.UTC(1987,5,1),0.35],
[Date.UTC(1987,6,1),0.4],
[Date.UTC(1987,7,1),0.25],
[Date.UTC(1987,8,1),0.35],
[Date.UTC(1987,9,1),0.32],
[Date.UTC(1987,10,1),0.29],
[Date.UTC(1987,11,1),0.47],
[Date.UTC(1988,0,1),0.57],
[Date.UTC(1988,1,1),0.45],
[Date.UTC(1988,2,1),0.51],
[Date.UTC(1988,3,1),0.43],
[Date.UTC(1988,4,1),0.44],
[Date.UTC(1988,5,1),0.4],
[Date.UTC(1988,6,1),0.33],
[Date.UTC(1988,7,1),0.39],
[Date.UTC(1988,8,1),0.36],
[Date.UTC(1988,9,1),0.38],
[Date.UTC(1988,10,1),0.12],
[Date.UTC(1988,11,1),0.28],
[Date.UTC(1989,0,1),0.12],
[Date.UTC(1989,1,1),0.3],
[Date.UTC(1989,2,1),0.36],
[Date.UTC(1989,3,1),0.29],
[Date.UTC(1989,4,1),0.17],
[Date.UTC(1989,5,1),0.17],
[Date.UTC(1989,6,1),0.34],
[Date.UTC(1989,7,1),0.34],
[Date.UTC(1989,8,1),0.35],
[Date.UTC(1989,9,1),0.29],
[Date.UTC(1989,10,1),0.19],
[Date.UTC(1989,11,1),0.37],
[Date.UTC(1990,0,1),0.42],
[Date.UTC(1990,1,1),0.44],
[Date.UTC(1990,2,1),0.8],
[Date.UTC(1990,3,1),0.57],
[Date.UTC(1990,4,1),0.46],
[Date.UTC(1990,5,1),0.39],
[Date.UTC(1990,6,1),0.46],
[Date.UTC(1990,7,1),0.35],
[Date.UTC(1990,8,1),0.24],
[Date.UTC(1990,9,1),0.45],
[Date.UTC(1990,10,1),0.47],
[Date.UTC(1990,11,1),0.41],
[Date.UTC(1991,0,1),0.43],
[Date.UTC(1991,1,1),0.5],
[Date.UTC(1991,2,1),0.35],
[Date.UTC(1991,3,1),0.51],
[Date.UTC(1991,4,1),0.34],
[Date.UTC(1991,5,1),0.53],
[Date.UTC(1991,6,1),0.47],
[Date.UTC(1991,7,1),0.4],
[Date.UTC(1991,8,1),0.44],
[Date.UTC(1991,9,1),0.28],
[Date.UTC(1991,10,1),0.3],
[Date.UTC(1991,11,1),0.32],
[Date.UTC(1992,0,1),0.47],
[Date.UTC(1992,1,1),0.41],
[Date.UTC(1992,2,1),0.48],
[Date.UTC(1992,3,1),0.27],
[Date.UTC(1992,4,1),0.3],
[Date.UTC(1992,5,1),0.26],
[Date.UTC(1992,6,1),0.09],
[Date.UTC(1992,7,1),0.08],
[Date.UTC(1992,8,1),0],
[Date.UTC(1992,9,1),0.06],
[Date.UTC(1992,10,1),0.03],
[Date.UTC(1992,11,1),0.21],
[Date.UTC(1993,0,1),0.34],
[Date.UTC(1993,1,1),0.37],
[Date.UTC(1993,2,1),0.36],
[Date.UTC(1993,3,1),0.28],
[Date.UTC(1993,4,1),0.29],
[Date.UTC(1993,5,1),0.23],
[Date.UTC(1993,6,1),0.25],
[Date.UTC(1993,7,1),0.11],
[Date.UTC(1993,8,1),0.12],
[Date.UTC(1993,9,1),0.23],
[Date.UTC(1993,10,1),0.04],
[Date.UTC(1993,11,1),0.18],
[Date.UTC(1994,0,1),0.26],
[Date.UTC(1994,1,1),0.03],
[Date.UTC(1994,2,1),0.3],
[Date.UTC(1994,3,1),0.41],
[Date.UTC(1994,4,1),0.28],
[Date.UTC(1994,5,1),0.44],
[Date.UTC(1994,6,1),0.3],
[Date.UTC(1994,7,1),0.22],
[Date.UTC(1994,8,1),0.3],
[Date.UTC(1994,9,1),0.42],
[Date.UTC(1994,10,1),0.45],
[Date.UTC(1994,11,1),0.38],
[Date.UTC(1995,0,1),0.52],
[Date.UTC(1995,1,1),0.79],
[Date.UTC(1995,2,1),0.47],
[Date.UTC(1995,3,1),0.47],
[Date.UTC(1995,4,1),0.28],
[Date.UTC(1995,5,1),0.43],
[Date.UTC(1995,6,1),0.46],
[Date.UTC(1995,7,1),0.46],
[Date.UTC(1995,8,1),0.34],
[Date.UTC(1995,9,1),0.48],
[Date.UTC(1995,10,1),0.45],
[Date.UTC(1995,11,1),0.26],
[Date.UTC(1996,0,1),0.23],
[Date.UTC(1996,1,1),0.47],
[Date.UTC(1996,2,1),0.33],
[Date.UTC(1996,3,1),0.32],
[Date.UTC(1996,4,1),0.28],
[Date.UTC(1996,5,1),0.26],
[Date.UTC(1996,6,1),0.36],
[Date.UTC(1996,7,1),0.48],
[Date.UTC(1996,8,1),0.26],
[Date.UTC(1996,9,1),0.2],
[Date.UTC(1996,10,1),0.39],
[Date.UTC(1996,11,1),0.37],
[Date.UTC(1997,0,1),0.3],
[Date.UTC(1997,1,1),0.42],
[Date.UTC(1997,2,1),0.52],
[Date.UTC(1997,3,1),0.35],
[Date.UTC(1997,4,1),0.36],
[Date.UTC(1997,5,1),0.54],
[Date.UTC(1997,6,1),0.34],
[Date.UTC(1997,7,1),0.43],
[Date.UTC(1997,8,1),0.53],
[Date.UTC(1997,9,1),0.6],
[Date.UTC(1997,10,1),0.64],
[Date.UTC(1997,11,1),0.58],
[Date.UTC(1998,0,1),0.59],
[Date.UTC(1998,1,1),0.88],
[Date.UTC(1998,2,1),0.64],
[Date.UTC(1998,3,1),0.64],
[Date.UTC(1998,4,1),0.67],
[Date.UTC(1998,5,1),0.76],
[Date.UTC(1998,6,1),0.68],
[Date.UTC(1998,7,1),0.66],
[Date.UTC(1998,8,1),0.42],
[Date.UTC(1998,9,1),0.43],
[Date.UTC(1998,10,1),0.44],
[Date.UTC(1998,11,1),0.56],
[Date.UTC(1999,0,1),0.49],
[Date.UTC(1999,1,1),0.65],
[Date.UTC(1999,2,1),0.33],
[Date.UTC(1999,3,1),0.33],
[Date.UTC(1999,4,1),0.28],
[Date.UTC(1999,5,1),0.36],
[Date.UTC(1999,6,1),0.39],
[Date.UTC(1999,7,1),0.33],
[Date.UTC(1999,8,1),0.39],
[Date.UTC(1999,9,1),0.35],
[Date.UTC(1999,10,1),0.38],
[Date.UTC(1999,11,1),0.41],
[Date.UTC(2000,0,1),0.26],
[Date.UTC(2000,1,1),0.57],
[Date.UTC(2000,2,1),0.55],
[Date.UTC(2000,3,1),0.58],
[Date.UTC(2000,4,1),0.36],
[Date.UTC(2000,5,1),0.4],
[Date.UTC(2000,6,1),0.38],
[Date.UTC(2000,7,1),0.43],
[Date.UTC(2000,8,1),0.4],
[Date.UTC(2000,9,1),0.28],
[Date.UTC(2000,10,1),0.31],
[Date.UTC(2000,11,1),0.29],
[Date.UTC(2001,0,1),0.46],
[Date.UTC(2001,1,1),0.45],
[Date.UTC(2001,2,1),0.56],
[Date.UTC(2001,3,1),0.51],
[Date.UTC(2001,4,1),0.58],
[Date.UTC(2001,5,1),0.52],
[Date.UTC(2001,6,1),0.6],
[Date.UTC(2001,7,1),0.51],
[Date.UTC(2001,8,1),0.53],
[Date.UTC(2001,9,1),0.51],
[Date.UTC(2001,10,1),0.73],
[Date.UTC(2001,11,1),0.57],
[Date.UTC(2002,0,1),0.78],
[Date.UTC(2002,1,1),0.8],
[Date.UTC(2002,2,1),0.88],
[Date.UTC(2002,3,1),0.59],
[Date.UTC(2002,4,1),0.63],
[Date.UTC(2002,5,1),0.53],
[Date.UTC(2002,6,1),0.61],
[Date.UTC(2002,7,1),0.53],
[Date.UTC(2002,8,1),0.62],
[Date.UTC(2002,9,1),0.55],
[Date.UTC(2002,10,1),0.59],
[Date.UTC(2002,11,1),0.43],
[Date.UTC(2003,0,1),0.76],
[Date.UTC(2003,1,1),0.59],
[Date.UTC(2003,2,1),0.6],
[Date.UTC(2003,3,1),0.56],
[Date.UTC(2003,4,1),0.62],
[Date.UTC(2003,5,1),0.48],
[Date.UTC(2003,6,1),0.58],
[Date.UTC(2003,7,1),0.66],
[Date.UTC(2003,8,1),0.63],
[Date.UTC(2003,9,1),0.74],
[Date.UTC(2003,10,1),0.54],
[Date.UTC(2003,11,1),0.75],
[Date.UTC(2004,0,1),0.59],
[Date.UTC(2004,1,1),0.73],
[Date.UTC(2004,2,1),0.64],
[Date.UTC(2004,3,1),0.62],
[Date.UTC(2004,4,1),0.39],
[Date.UTC(2004,5,1),0.45],
[Date.UTC(2004,6,1),0.27],
[Date.UTC(2004,7,1),0.48],
[Date.UTC(2004,8,1),0.52],
[Date.UTC(2004,9,1),0.62],
[Date.UTC(2004,10,1),0.73],
[Date.UTC(2004,11,1),0.51],
[Date.UTC(2005,0,1),0.74],
[Date.UTC(2005,1,1),0.61],
[Date.UTC(2005,2,1),0.75],
[Date.UTC(2005,3,1),0.68],
[Date.UTC(2005,4,1),0.63],
[Date.UTC(2005,5,1),0.65],
[Date.UTC(2005,6,1),0.62],
[Date.UTC(2005,7,1),0.62],
[Date.UTC(2005,8,1),0.71],
[Date.UTC(2005,9,1),0.75],
[Date.UTC(2005,10,1),0.74],
[Date.UTC(2005,11,1),0.69],
[Date.UTC(2006,0,1),0.57],
[Date.UTC(2006,1,1),0.73],
[Date.UTC(2006,2,1),0.63],
[Date.UTC(2006,3,1),0.49],
[Date.UTC(2006,4,1),0.5],
[Date.UTC(2006,5,1),0.66],
[Date.UTC(2006,6,1),0.55],
[Date.UTC(2006,7,1),0.71],
[Date.UTC(2006,8,1),0.66],
[Date.UTC(2006,9,1),0.69],
[Date.UTC(2006,10,1),0.73],
[Date.UTC(2006,11,1),0.79],
[Date.UTC(2007,0,1),1.02],
[Date.UTC(2007,1,1),0.71],
[Date.UTC(2007,2,1),0.73],
[Date.UTC(2007,3,1),0.76],
[Date.UTC(2007,4,1),0.69],
[Date.UTC(2007,5,1),0.61],
[Date.UTC(2007,6,1),0.6],
[Date.UTC(2007,7,1),0.6],
[Date.UTC(2007,8,1),0.6],
[Date.UTC(2007,9,1),0.6],
[Date.UTC(2007,10,1),0.59],
[Date.UTC(2007,11,1),0.5],
[Date.UTC(2008,0,1),0.3],
[Date.UTC(2008,1,1),0.39],
[Date.UTC(2008,2,1),0.74],
[Date.UTC(2008,3,1),0.54],
[Date.UTC(2008,4,1),0.5],
[Date.UTC(2008,5,1),0.5],
[Date.UTC(2008,6,1),0.61],
[Date.UTC(2008,7,1),0.48],
[Date.UTC(2008,8,1),0.61],
[Date.UTC(2008,9,1),0.66],
[Date.UTC(2008,10,1),0.7],
[Date.UTC(2008,11,1),0.55],
[Date.UTC(2009,0,1),0.65],
[Date.UTC(2009,1,1),0.54],
[Date.UTC(2009,2,1),0.55],
[Date.UTC(2009,3,1),0.61],
[Date.UTC(2009,4,1),0.66],
[Date.UTC(2009,5,1),0.65],
[Date.UTC(2009,6,1),0.72],
[Date.UTC(2009,7,1),0.68],
[Date.UTC(2009,8,1),0.73],
[Date.UTC(2009,9,1),0.66],
[Date.UTC(2009,10,1),0.81],
[Date.UTC(2009,11,1),0.68],
[Date.UTC(2010,0,1),0.76],
[Date.UTC(2010,1,1),0.84],
[Date.UTC(2010,2,1),0.92],
[Date.UTC(2010,3,1),0.85],
[Date.UTC(2010,4,1),0.76],
[Date.UTC(2010,5,1),0.69],
[Date.UTC(2010,6,1),0.64],
[Date.UTC(2010,7,1),0.67],
[Date.UTC(2010,8,1),0.64],
[Date.UTC(2010,9,1),0.71],
[Date.UTC(2010,10,1),0.83],
[Date.UTC(2010,11,1),0.45],
[Date.UTC(2011,0,1),0.52],
[Date.UTC(2011,1,1),0.48],
[Date.UTC(2011,2,1),0.65],
[Date.UTC(2011,3,1),0.65],
[Date.UTC(2011,4,1),0.52],
[Date.UTC(2011,5,1),0.61],
[Date.UTC(2011,6,1),0.71],
[Date.UTC(2011,7,1),0.73],
[Date.UTC(2011,8,1),0.58],
[Date.UTC(2011,9,1),0.66],
[Date.UTC(2011,10,1),0.59],
[Date.UTC(2011,11,1),0.61],
[Date.UTC(2012,0,1),0.49],
[Date.UTC(2012,1,1),0.49],
[Date.UTC(2012,2,1),0.58],
[Date.UTC(2012,3,1),0.72],
[Date.UTC(2012,4,1),0.78],
[Date.UTC(2012,5,1),0.65],
[Date.UTC(2012,6,1),0.59],
[Date.UTC(2012,7,1),0.64],
[Date.UTC(2012,8,1),0.72],
[Date.UTC(2012,9,1),0.79],
[Date.UTC(2012,10,1),0.79],
[Date.UTC(2012,11,1),0.53],
[Date.UTC(2013,0,1),0.71],
[Date.UTC(2013,1,1),0.63],
[Date.UTC(2013,2,1),0.68],
[Date.UTC(2013,3,1),0.57],
[Date.UTC(2013,4,1),0.62],
[Date.UTC(2013,5,1),0.71],
[Date.UTC(2013,6,1),0.62],
[Date.UTC(2013,7,1),0.71],
[Date.UTC(2013,8,1),0.78],
[Date.UTC(2013,9,1),0.7],
[Date.UTC(2013,10,1),0.85],
[Date.UTC(2013,11,1),0.7],
[Date.UTC(2014,0,1),0.76],
[Date.UTC(2014,1,1),0.56],
[Date.UTC(2014,2,1),0.8],
[Date.UTC(2014,3,1),0.81],
[Date.UTC(2014,4,1),0.86],
[Date.UTC(2014,5,1),0.67],
[Date.UTC(2014,6,1),0.59],
[Date.UTC(2014,7,1),0.81],
[Date.UTC(2014,8,1),0.85],
[Date.UTC(2014,9,1),0.8],
[Date.UTC(2014,10,1),0.67],
[Date.UTC(2014,11,1),0.8],
[Date.UTC(2015,0,1),0.86],
[Date.UTC(2015,1,1),0.9],
[Date.UTC(2015,2,1),0.96],
[Date.UTC(2015,3,1),0.77],
[Date.UTC(2015,4,1),0.79],
[Date.UTC(2015,5,1),0.82],
[Date.UTC(2015,6,1),0.75],
[Date.UTC(2015,7,1),0.83],
[Date.UTC(2015,8,1),0.84],
[Date.UTC(2015,9,1),1.09],
[Date.UTC(2015,10,1),1.06],
[Date.UTC(2015,11,1),1.16],
[Date.UTC(2016,0,1),1.17],
[Date.UTC(2016,1,1),1.37],
[Date.UTC(2016,2,1),1.36],
[Date.UTC(2016,3,1),1.12],
[Date.UTC(2016,4,1),0.96],
[Date.UTC(2016,5,1),0.82],
[Date.UTC(2016,6,1),0.84],
[Date.UTC(2016,7,1),1.01],
[Date.UTC(2016,8,1),0.91],
[Date.UTC(2016,9,1),0.88],
[Date.UTC(2016,10,1),0.91],
[Date.UTC(2016,11,1),0.86],
[Date.UTC(2017,0,1),1.03],
[Date.UTC(2017,1,1),1.14],
[Date.UTC(2017,2,1),1.16],
[Date.UTC(2017,3,1),0.94],
[Date.UTC(2017,4,1),0.9],
[Date.UTC(2017,5,1),0.72],
[Date.UTC(2017,6,1),0.82],
[Date.UTC(2017,7,1),0.87],
[Date.UTC(2017,8,1),0.79],
[Date.UTC(2017,9,1),0.9],
[Date.UTC(2017,10,1),0.88],
[Date.UTC(2017,11,1),0.95],
[Date.UTC(2018,0,1),0.82],
[Date.UTC(2018,1,1),0.85],
[Date.UTC(2018,2,1),0.9],
[Date.UTC(2018,3,1),0.9],
[Date.UTC(2018,4,1),0.83],
[Date.UTC(2018,5,1),0.79],
[Date.UTC(2018,6,1),0.83],
[Date.UTC(2018,7,1),0.77],
[Date.UTC(2018,8,1),0.8],
[Date.UTC(2018,9,1),1.01],
[Date.UTC(2018,10,1),0.83],
[Date.UTC(2018,11,1),0.92],
[Date.UTC(2019,0,1),0.93],
[Date.UTC(2019,1,1),0.95],
[Date.UTC(2019,2,1),1.18],
[Date.UTC(2019,3,1),1.02],
[Date.UTC(2019,4,1),0.86],
[Date.UTC(2019,5,1),0.92],
[Date.UTC(2019,6,1),0.94],
[Date.UTC(2019,7,1),0.94],
[Date.UTC(2019,8,1),0.92],
[Date.UTC(2019,9,1),1.02],
[Date.UTC(2019,10,1),1],
[Date.UTC(2019,11,1),1.1],
[Date.UTC(2020,0,1),1.17],
[Date.UTC(2020,1,1),1.24],
[Date.UTC(2020,2,1),1.19],
[Date.UTC(2020,3,1),1.16] ]