/*
   Licensed to the Apache Software Foundation (ASF) under one or more
   contributor license agreements.  See the NOTICE file distributed with
   this work for additional information regarding copyright ownership.
   The ASF licenses this file to You under the Apache License, Version 2.0
   (the "License"); you may not use this file except in compliance with
   the License.  You may obtain a copy of the License at

       http://www.apache.org/licenses/LICENSE-2.0

   Unless required by applicable law or agreed to in writing, software
   distributed under the License is distributed on an "AS IS" BASIS,
   WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   See the License for the specific language governing permissions and
   limitations under the License.
*/
$(document).ready(function() {

    $(".click-title").mouseenter( function(    e){
        e.preventDefault();
        this.style.cursor="pointer";
    });
    $(".click-title").mousedown( function(event){
        event.preventDefault();
    });

    // Ugly code while this script is shared among several pages
    try{
        refreshHitsPerSecond(true);
    } catch(e){}
    try{
        refreshResponseTimeOverTime(true);
    } catch(e){}
    try{
        refreshResponseTimePercentiles();
    } catch(e){}
});


var responseTimePercentilesInfos = {
        data: {"result": {"minY": 26.0, "minX": 0.0, "maxY": 15469.0, "series": [{"data": [[0.0, 26.0], [0.1, 36.0], [0.2, 48.0], [0.3, 48.0], [0.4, 68.0], [0.5, 69.0], [0.6, 69.0], [0.7, 74.0], [0.8, 75.0], [0.9, 75.0], [1.0, 77.0], [1.1, 77.0], [1.2, 79.0], [1.3, 80.0], [1.4, 80.0], [1.5, 83.0], [1.6, 84.0], [1.7, 85.0], [1.8, 87.0], [1.9, 88.0], [2.0, 89.0], [2.1, 90.0], [2.2, 91.0], [2.3, 94.0], [2.4, 97.0], [2.5, 98.0], [2.6, 99.0], [2.7, 101.0], [2.8, 104.0], [2.9, 106.0], [3.0, 107.0], [3.1, 109.0], [3.2, 110.0], [3.3, 112.0], [3.4, 114.0], [3.5, 114.0], [3.6, 117.0], [3.7, 118.0], [3.8, 120.0], [3.9, 120.0], [4.0, 122.0], [4.1, 123.0], [4.2, 125.0], [4.3, 126.0], [4.4, 128.0], [4.5, 130.0], [4.6, 131.0], [4.7, 132.0], [4.8, 133.0], [4.9, 134.0], [5.0, 135.0], [5.1, 136.0], [5.2, 139.0], [5.3, 139.0], [5.4, 140.0], [5.5, 141.0], [5.6, 142.0], [5.7, 142.0], [5.8, 145.0], [5.9, 146.0], [6.0, 148.0], [6.1, 148.0], [6.2, 149.0], [6.3, 150.0], [6.4, 152.0], [6.5, 152.0], [6.6, 153.0], [6.7, 153.0], [6.8, 154.0], [6.9, 156.0], [7.0, 158.0], [7.1, 159.0], [7.2, 159.0], [7.3, 163.0], [7.4, 164.0], [7.5, 165.0], [7.6, 170.0], [7.7, 173.0], [7.8, 175.0], [7.9, 176.0], [8.0, 176.0], [8.1, 176.0], [8.2, 179.0], [8.3, 180.0], [8.4, 180.0], [8.5, 181.0], [8.6, 182.0], [8.7, 182.0], [8.8, 182.0], [8.9, 182.0], [9.0, 183.0], [9.1, 183.0], [9.2, 184.0], [9.3, 184.0], [9.4, 184.0], [9.5, 184.0], [9.6, 184.0], [9.7, 185.0], [9.8, 185.0], [9.9, 185.0], [10.0, 186.0], [10.1, 186.0], [10.2, 186.0], [10.3, 186.0], [10.4, 186.0], [10.5, 187.0], [10.6, 187.0], [10.7, 188.0], [10.8, 188.0], [10.9, 188.0], [11.0, 188.0], [11.1, 189.0], [11.2, 189.0], [11.3, 190.0], [11.4, 190.0], [11.5, 190.0], [11.6, 190.0], [11.7, 191.0], [11.8, 192.0], [11.9, 192.0], [12.0, 192.0], [12.1, 192.0], [12.2, 192.0], [12.3, 193.0], [12.4, 194.0], [12.5, 194.0], [12.6, 194.0], [12.7, 194.0], [12.8, 194.0], [12.9, 195.0], [13.0, 196.0], [13.1, 196.0], [13.2, 196.0], [13.3, 196.0], [13.4, 196.0], [13.5, 197.0], [13.6, 198.0], [13.7, 198.0], [13.8, 198.0], [13.9, 198.0], [14.0, 198.0], [14.1, 199.0], [14.2, 199.0], [14.3, 199.0], [14.4, 199.0], [14.5, 199.0], [14.6, 199.0], [14.7, 199.0], [14.8, 200.0], [14.9, 200.0], [15.0, 200.0], [15.1, 200.0], [15.2, 200.0], [15.3, 201.0], [15.4, 201.0], [15.5, 201.0], [15.6, 201.0], [15.7, 201.0], [15.8, 201.0], [15.9, 201.0], [16.0, 201.0], [16.1, 201.0], [16.2, 201.0], [16.3, 202.0], [16.4, 202.0], [16.5, 202.0], [16.6, 202.0], [16.7, 202.0], [16.8, 202.0], [16.9, 202.0], [17.0, 203.0], [17.1, 203.0], [17.2, 203.0], [17.3, 203.0], [17.4, 203.0], [17.5, 203.0], [17.6, 203.0], [17.7, 203.0], [17.8, 203.0], [17.9, 203.0], [18.0, 203.0], [18.1, 204.0], [18.2, 204.0], [18.3, 204.0], [18.4, 204.0], [18.5, 204.0], [18.6, 204.0], [18.7, 204.0], [18.8, 204.0], [18.9, 204.0], [19.0, 204.0], [19.1, 204.0], [19.2, 204.0], [19.3, 204.0], [19.4, 205.0], [19.5, 205.0], [19.6, 205.0], [19.7, 205.0], [19.8, 205.0], [19.9, 205.0], [20.0, 205.0], [20.1, 205.0], [20.2, 205.0], [20.3, 205.0], [20.4, 205.0], [20.5, 205.0], [20.6, 205.0], [20.7, 205.0], [20.8, 205.0], [20.9, 205.0], [21.0, 205.0], [21.1, 205.0], [21.2, 205.0], [21.3, 206.0], [21.4, 206.0], [21.5, 206.0], [21.6, 206.0], [21.7, 206.0], [21.8, 206.0], [21.9, 206.0], [22.0, 206.0], [22.1, 206.0], [22.2, 206.0], [22.3, 206.0], [22.4, 206.0], [22.5, 206.0], [22.6, 206.0], [22.7, 206.0], [22.8, 206.0], [22.9, 206.0], [23.0, 206.0], [23.1, 206.0], [23.2, 206.0], [23.3, 206.0], [23.4, 207.0], [23.5, 207.0], [23.6, 207.0], [23.7, 207.0], [23.8, 207.0], [23.9, 207.0], [24.0, 207.0], [24.1, 207.0], [24.2, 207.0], [24.3, 207.0], [24.4, 207.0], [24.5, 207.0], [24.6, 207.0], [24.7, 207.0], [24.8, 207.0], [24.9, 207.0], [25.0, 207.0], [25.1, 207.0], [25.2, 207.0], [25.3, 207.0], [25.4, 207.0], [25.5, 207.0], [25.6, 207.0], [25.7, 207.0], [25.8, 207.0], [25.9, 207.0], [26.0, 207.0], [26.1, 207.0], [26.2, 207.0], [26.3, 207.0], [26.4, 208.0], [26.5, 208.0], [26.6, 208.0], [26.7, 208.0], [26.8, 208.0], [26.9, 208.0], [27.0, 208.0], [27.1, 208.0], [27.2, 208.0], [27.3, 208.0], [27.4, 208.0], [27.5, 208.0], [27.6, 208.0], [27.7, 208.0], [27.8, 208.0], [27.9, 208.0], [28.0, 208.0], [28.1, 208.0], [28.2, 208.0], [28.3, 208.0], [28.4, 208.0], [28.5, 208.0], [28.6, 208.0], [28.7, 208.0], [28.8, 208.0], [28.9, 208.0], [29.0, 208.0], [29.1, 208.0], [29.2, 209.0], [29.3, 209.0], [29.4, 209.0], [29.5, 209.0], [29.6, 209.0], [29.7, 209.0], [29.8, 209.0], [29.9, 209.0], [30.0, 209.0], [30.1, 209.0], [30.2, 209.0], [30.3, 209.0], [30.4, 209.0], [30.5, 209.0], [30.6, 209.0], [30.7, 209.0], [30.8, 209.0], [30.9, 209.0], [31.0, 209.0], [31.1, 209.0], [31.2, 209.0], [31.3, 209.0], [31.4, 209.0], [31.5, 209.0], [31.6, 209.0], [31.7, 209.0], [31.8, 209.0], [31.9, 209.0], [32.0, 209.0], [32.1, 209.0], [32.2, 209.0], [32.3, 209.0], [32.4, 209.0], [32.5, 209.0], [32.6, 209.0], [32.7, 209.0], [32.8, 209.0], [32.9, 210.0], [33.0, 210.0], [33.1, 210.0], [33.2, 210.0], [33.3, 210.0], [33.4, 210.0], [33.5, 210.0], [33.6, 210.0], [33.7, 210.0], [33.8, 210.0], [33.9, 210.0], [34.0, 210.0], [34.1, 210.0], [34.2, 210.0], [34.3, 210.0], [34.4, 210.0], [34.5, 210.0], [34.6, 210.0], [34.7, 210.0], [34.8, 210.0], [34.9, 210.0], [35.0, 210.0], [35.1, 210.0], [35.2, 210.0], [35.3, 210.0], [35.4, 210.0], [35.5, 210.0], [35.6, 210.0], [35.7, 210.0], [35.8, 210.0], [35.9, 210.0], [36.0, 210.0], [36.1, 210.0], [36.2, 210.0], [36.3, 210.0], [36.4, 210.0], [36.5, 210.0], [36.6, 210.0], [36.7, 210.0], [36.8, 210.0], [36.9, 210.0], [37.0, 211.0], [37.1, 211.0], [37.2, 211.0], [37.3, 211.0], [37.4, 211.0], [37.5, 211.0], [37.6, 211.0], [37.7, 211.0], [37.8, 211.0], [37.9, 211.0], [38.0, 211.0], [38.1, 211.0], [38.2, 211.0], [38.3, 211.0], [38.4, 211.0], [38.5, 211.0], [38.6, 211.0], [38.7, 211.0], [38.8, 211.0], [38.9, 211.0], [39.0, 211.0], [39.1, 211.0], [39.2, 211.0], [39.3, 211.0], [39.4, 211.0], [39.5, 211.0], [39.6, 211.0], [39.7, 211.0], [39.8, 211.0], [39.9, 211.0], [40.0, 211.0], [40.1, 211.0], [40.2, 211.0], [40.3, 211.0], [40.4, 211.0], [40.5, 211.0], [40.6, 211.0], [40.7, 211.0], [40.8, 211.0], [40.9, 211.0], [41.0, 211.0], [41.1, 211.0], [41.2, 211.0], [41.3, 212.0], [41.4, 212.0], [41.5, 212.0], [41.6, 212.0], [41.7, 212.0], [41.8, 212.0], [41.9, 212.0], [42.0, 212.0], [42.1, 212.0], [42.2, 212.0], [42.3, 212.0], [42.4, 212.0], [42.5, 212.0], [42.6, 212.0], [42.7, 212.0], [42.8, 212.0], [42.9, 212.0], [43.0, 212.0], [43.1, 212.0], [43.2, 212.0], [43.3, 212.0], [43.4, 212.0], [43.5, 212.0], [43.6, 212.0], [43.7, 212.0], [43.8, 212.0], [43.9, 212.0], [44.0, 212.0], [44.1, 212.0], [44.2, 212.0], [44.3, 212.0], [44.4, 212.0], [44.5, 212.0], [44.6, 212.0], [44.7, 212.0], [44.8, 212.0], [44.9, 212.0], [45.0, 212.0], [45.1, 212.0], [45.2, 212.0], [45.3, 212.0], [45.4, 212.0], [45.5, 212.0], [45.6, 212.0], [45.7, 212.0], [45.8, 212.0], [45.9, 212.0], [46.0, 212.0], [46.1, 212.0], [46.2, 212.0], [46.3, 212.0], [46.4, 212.0], [46.5, 212.0], [46.6, 212.0], [46.7, 212.0], [46.8, 212.0], [46.9, 212.0], [47.0, 212.0], [47.1, 212.0], [47.2, 212.0], [47.3, 212.0], [47.4, 213.0], [47.5, 213.0], [47.6, 213.0], [47.7, 213.0], [47.8, 213.0], [47.9, 213.0], [48.0, 213.0], [48.1, 213.0], [48.2, 213.0], [48.3, 213.0], [48.4, 213.0], [48.5, 213.0], [48.6, 213.0], [48.7, 213.0], [48.8, 213.0], [48.9, 213.0], [49.0, 213.0], [49.1, 213.0], [49.2, 213.0], [49.3, 213.0], [49.4, 213.0], [49.5, 213.0], [49.6, 213.0], [49.7, 213.0], [49.8, 213.0], [49.9, 213.0], [50.0, 213.0], [50.1, 213.0], [50.2, 213.0], [50.3, 213.0], [50.4, 213.0], [50.5, 213.0], [50.6, 213.0], [50.7, 213.0], [50.8, 213.0], [50.9, 213.0], [51.0, 214.0], [51.1, 214.0], [51.2, 214.0], [51.3, 214.0], [51.4, 214.0], [51.5, 214.0], [51.6, 214.0], [51.7, 214.0], [51.8, 214.0], [51.9, 214.0], [52.0, 214.0], [52.1, 214.0], [52.2, 214.0], [52.3, 214.0], [52.4, 214.0], [52.5, 214.0], [52.6, 214.0], [52.7, 214.0], [52.8, 214.0], [52.9, 214.0], [53.0, 214.0], [53.1, 214.0], [53.2, 214.0], [53.3, 214.0], [53.4, 214.0], [53.5, 214.0], [53.6, 214.0], [53.7, 214.0], [53.8, 214.0], [53.9, 214.0], [54.0, 214.0], [54.1, 214.0], [54.2, 214.0], [54.3, 214.0], [54.4, 214.0], [54.5, 214.0], [54.6, 214.0], [54.7, 214.0], [54.8, 214.0], [54.9, 214.0], [55.0, 214.0], [55.1, 214.0], [55.2, 214.0], [55.3, 214.0], [55.4, 214.0], [55.5, 214.0], [55.6, 214.0], [55.7, 214.0], [55.8, 215.0], [55.9, 215.0], [56.0, 215.0], [56.1, 215.0], [56.2, 215.0], [56.3, 215.0], [56.4, 215.0], [56.5, 215.0], [56.6, 215.0], [56.7, 215.0], [56.8, 215.0], [56.9, 215.0], [57.0, 215.0], [57.1, 215.0], [57.2, 215.0], [57.3, 215.0], [57.4, 215.0], [57.5, 215.0], [57.6, 215.0], [57.7, 215.0], [57.8, 215.0], [57.9, 215.0], [58.0, 215.0], [58.1, 215.0], [58.2, 215.0], [58.3, 215.0], [58.4, 215.0], [58.5, 215.0], [58.6, 215.0], [58.7, 215.0], [58.8, 215.0], [58.9, 215.0], [59.0, 215.0], [59.1, 215.0], [59.2, 215.0], [59.3, 215.0], [59.4, 215.0], [59.5, 215.0], [59.6, 216.0], [59.7, 216.0], [59.8, 216.0], [59.9, 216.0], [60.0, 216.0], [60.1, 216.0], [60.2, 216.0], [60.3, 216.0], [60.4, 216.0], [60.5, 216.0], [60.6, 216.0], [60.7, 216.0], [60.8, 216.0], [60.9, 216.0], [61.0, 216.0], [61.1, 216.0], [61.2, 216.0], [61.3, 216.0], [61.4, 216.0], [61.5, 216.0], [61.6, 216.0], [61.7, 216.0], [61.8, 216.0], [61.9, 216.0], [62.0, 216.0], [62.1, 216.0], [62.2, 216.0], [62.3, 216.0], [62.4, 216.0], [62.5, 216.0], [62.6, 216.0], [62.7, 216.0], [62.8, 216.0], [62.9, 216.0], [63.0, 216.0], [63.1, 216.0], [63.2, 216.0], [63.3, 217.0], [63.4, 217.0], [63.5, 217.0], [63.6, 217.0], [63.7, 217.0], [63.8, 217.0], [63.9, 217.0], [64.0, 217.0], [64.1, 217.0], [64.2, 217.0], [64.3, 217.0], [64.4, 217.0], [64.5, 217.0], [64.6, 217.0], [64.7, 217.0], [64.8, 217.0], [64.9, 217.0], [65.0, 217.0], [65.1, 217.0], [65.2, 217.0], [65.3, 217.0], [65.4, 217.0], [65.5, 217.0], [65.6, 217.0], [65.7, 217.0], [65.8, 217.0], [65.9, 217.0], [66.0, 217.0], [66.1, 217.0], [66.2, 217.0], [66.3, 217.0], [66.4, 217.0], [66.5, 218.0], [66.6, 218.0], [66.7, 218.0], [66.8, 218.0], [66.9, 218.0], [67.0, 218.0], [67.1, 218.0], [67.2, 218.0], [67.3, 218.0], [67.4, 218.0], [67.5, 218.0], [67.6, 218.0], [67.7, 218.0], [67.8, 218.0], [67.9, 218.0], [68.0, 218.0], [68.1, 218.0], [68.2, 218.0], [68.3, 218.0], [68.4, 218.0], [68.5, 218.0], [68.6, 218.0], [68.7, 218.0], [68.8, 218.0], [68.9, 218.0], [69.0, 218.0], [69.1, 218.0], [69.2, 218.0], [69.3, 219.0], [69.4, 219.0], [69.5, 219.0], [69.6, 219.0], [69.7, 219.0], [69.8, 219.0], [69.9, 219.0], [70.0, 219.0], [70.1, 219.0], [70.2, 219.0], [70.3, 219.0], [70.4, 219.0], [70.5, 219.0], [70.6, 219.0], [70.7, 219.0], [70.8, 219.0], [70.9, 219.0], [71.0, 219.0], [71.1, 220.0], [71.2, 220.0], [71.3, 220.0], [71.4, 220.0], [71.5, 220.0], [71.6, 220.0], [71.7, 220.0], [71.8, 220.0], [71.9, 220.0], [72.0, 220.0], [72.1, 220.0], [72.2, 220.0], [72.3, 220.0], [72.4, 221.0], [72.5, 221.0], [72.6, 221.0], [72.7, 221.0], [72.8, 221.0], [72.9, 221.0], [73.0, 221.0], [73.1, 221.0], [73.2, 221.0], [73.3, 222.0], [73.4, 222.0], [73.5, 222.0], [73.6, 222.0], [73.7, 222.0], [73.8, 222.0], [73.9, 222.0], [74.0, 222.0], [74.1, 223.0], [74.2, 223.0], [74.3, 223.0], [74.4, 223.0], [74.5, 223.0], [74.6, 223.0], [74.7, 223.0], [74.8, 223.0], [74.9, 223.0], [75.0, 223.0], [75.1, 223.0], [75.2, 223.0], [75.3, 224.0], [75.4, 224.0], [75.5, 225.0], [75.6, 225.0], [75.7, 225.0], [75.8, 225.0], [75.9, 225.0], [76.0, 227.0], [76.1, 227.0], [76.2, 227.0], [76.3, 227.0], [76.4, 228.0], [76.5, 229.0], [76.6, 229.0], [76.7, 229.0], [76.8, 232.0], [76.9, 233.0], [77.0, 370.0], [77.1, 408.0], [77.2, 411.0], [77.3, 415.0], [77.4, 417.0], [77.5, 422.0], [77.6, 422.0], [77.7, 426.0], [77.8, 426.0], [77.9, 427.0], [78.0, 619.0], [78.1, 625.0], [78.2, 1032.0], [78.3, 1035.0], [78.4, 1040.0], [78.5, 1040.0], [78.6, 1042.0], [78.7, 1044.0], [78.8, 1048.0], [78.9, 1049.0], [79.0, 1049.0], [79.1, 1052.0], [79.2, 1058.0], [79.3, 1066.0], [79.4, 1067.0], [79.5, 1071.0], [79.6, 1072.0], [79.7, 1084.0], [79.8, 1085.0], [79.9, 1089.0], [80.0, 1090.0], [80.1, 1091.0], [80.2, 1111.0], [80.3, 1112.0], [80.4, 1123.0], [80.5, 1126.0], [80.6, 1142.0], [80.7, 1150.0], [80.8, 1156.0], [80.9, 1163.0], [81.0, 1163.0], [81.1, 1165.0], [81.2, 1169.0], [81.3, 1177.0], [81.4, 1182.0], [81.5, 1188.0], [81.6, 1204.0], [81.7, 1210.0], [81.8, 1212.0], [81.9, 1213.0], [82.0, 1214.0], [82.1, 1217.0], [82.2, 1218.0], [82.3, 1218.0], [82.4, 1219.0], [82.5, 1220.0], [82.6, 1221.0], [82.7, 1222.0], [82.8, 1223.0], [82.9, 1224.0], [83.0, 1225.0], [83.1, 1225.0], [83.2, 1225.0], [83.3, 1225.0], [83.4, 1227.0], [83.5, 1227.0], [83.6, 1228.0], [83.7, 1228.0], [83.8, 1229.0], [83.9, 1229.0], [84.0, 1230.0], [84.1, 1231.0], [84.2, 1232.0], [84.3, 1232.0], [84.4, 1233.0], [84.5, 1233.0], [84.6, 1234.0], [84.7, 1234.0], [84.8, 1234.0], [84.9, 1234.0], [85.0, 1235.0], [85.1, 1235.0], [85.2, 1236.0], [85.3, 1236.0], [85.4, 1237.0], [85.5, 1237.0], [85.6, 1238.0], [85.7, 1241.0], [85.8, 1242.0], [85.9, 1245.0], [86.0, 1247.0], [86.1, 1248.0], [86.2, 1250.0], [86.3, 1401.0], [86.4, 1424.0], [86.5, 1427.0], [86.6, 1429.0], [86.7, 1436.0], [86.8, 1436.0], [86.9, 1436.0], [87.0, 1444.0], [87.1, 1444.0], [87.2, 1448.0], [87.3, 1633.0], [87.4, 1639.0], [87.5, 1644.0], [87.6, 1645.0], [87.7, 1645.0], [87.8, 1653.0], [87.9, 1658.0], [88.0, 1659.0], [88.1, 1661.0], [88.2, 1727.0], [88.3, 1883.0], [88.4, 2049.0], [88.5, 2057.0], [88.6, 2071.0], [88.7, 2705.0], [88.8, 2795.0], [88.9, 3034.0], [89.0, 3035.0], [89.1, 3040.0], [89.2, 3043.0], [89.3, 3045.0], [89.4, 3045.0], [89.5, 3045.0], [89.6, 3047.0], [89.7, 3052.0], [89.8, 3052.0], [89.9, 3054.0], [90.0, 3055.0], [90.1, 3057.0], [90.2, 3058.0], [90.3, 3061.0], [90.4, 3061.0], [90.5, 3065.0], [90.6, 3065.0], [90.7, 3066.0], [90.8, 3071.0], [90.9, 3072.0], [91.0, 3074.0], [91.1, 3076.0], [91.2, 3078.0], [91.3, 3085.0], [91.4, 3101.0], [91.5, 3114.0], [91.6, 3137.0], [91.7, 3166.0], [91.8, 3187.0], [91.9, 3188.0], [92.0, 3199.0], [92.1, 3199.0], [92.2, 3213.0], [92.3, 3232.0], [92.4, 3237.0], [92.5, 3239.0], [92.6, 3239.0], [92.7, 3239.0], [92.8, 3242.0], [92.9, 3243.0], [93.0, 3247.0], [93.1, 3247.0], [93.2, 3248.0], [93.3, 3249.0], [93.4, 3260.0], [93.5, 3264.0], [93.6, 3435.0], [93.7, 3443.0], [93.8, 3447.0], [93.9, 3449.0], [94.0, 3450.0], [94.1, 3455.0], [94.2, 3456.0], [94.3, 3461.0], [94.4, 3464.0], [94.5, 3513.0], [94.6, 3666.0], [94.7, 3671.0], [94.8, 3673.0], [94.9, 4059.0], [95.0, 4116.0], [95.1, 4383.0], [95.2, 4796.0], [95.3, 6423.0], [95.4, 7074.0], [95.5, 7078.0], [95.6, 7099.0], [95.7, 7101.0], [95.8, 7111.0], [95.9, 7122.0], [96.0, 7149.0], [96.1, 7153.0], [96.2, 7155.0], [96.3, 7158.0], [96.4, 7169.0], [96.5, 7172.0], [96.6, 7182.0], [96.7, 7210.0], [96.8, 7214.0], [96.9, 7221.0], [97.0, 7223.0], [97.1, 7241.0], [97.2, 7249.0], [97.3, 7261.0], [97.4, 7261.0], [97.5, 7272.0], [97.6, 7272.0], [97.7, 7277.0], [97.8, 7285.0], [97.9, 7289.0], [98.0, 7295.0], [98.1, 7306.0], [98.2, 7312.0], [98.3, 7334.0], [98.4, 7343.0], [98.5, 7345.0], [98.6, 7351.0], [98.7, 7352.0], [98.8, 7361.0], [98.9, 7434.0], [99.0, 7477.0], [99.1, 7544.0], [99.2, 7782.0], [99.3, 7842.0], [99.4, 8267.0], [99.5, 15290.0], [99.6, 15319.0], [99.7, 15339.0], [99.8, 15407.0], [99.9, 15469.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
        getOptions: function() {
            return {
                series: {
                    points: { show: false }
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendResponseTimePercentiles'
                },
                xaxis: {
                    tickDecimals: 1,
                    axisLabel: "Percentiles",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Percentile value in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : %x.2 percentile was %y ms"
                },
                selection: { mode: "xy" },
            };
        },
        createGraph: function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesResponseTimePercentiles"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotResponseTimesPercentiles"), dataset, options);
            // setup overview
            $.plot($("#overviewResponseTimesPercentiles"), dataset, prepareOverviewOptions(options));
        }
};

/**
 * @param elementId Id of element where we display message
 */
function setEmptyGraph(elementId) {
    $(function() {
        $(elementId).text("No graph series with filter="+seriesFilter);
    });
}

// Response times percentiles
function refreshResponseTimePercentiles() {
    var infos = responseTimePercentilesInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyResponseTimePercentiles");
        return;
    }
    if (isGraph($("#flotResponseTimesPercentiles"))){
        infos.createGraph();
    } else {
        var choiceContainer = $("#choicesResponseTimePercentiles");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotResponseTimesPercentiles", "#overviewResponseTimesPercentiles");
        $('#bodyResponseTimePercentiles .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
}

var responseTimeDistributionInfos = {
        data: {"result": {"minY": 1.0, "minX": 0.0, "maxY": 622.0, "series": [{"data": [[0.0, 26.0], [8200.0, 1.0], [600.0, 2.0], [15200.0, 1.0], [15300.0, 2.0], [15400.0, 2.0], [1000.0, 20.0], [1100.0, 14.0], [1200.0, 47.0], [1400.0, 10.0], [100.0, 122.0], [1600.0, 9.0], [1700.0, 1.0], [1800.0, 1.0], [2000.0, 3.0], [2700.0, 2.0], [3000.0, 25.0], [3100.0, 8.0], [200.0, 622.0], [3200.0, 14.0], [3400.0, 9.0], [3500.0, 1.0], [3600.0, 3.0], [4000.0, 1.0], [4100.0, 1.0], [4300.0, 1.0], [4700.0, 1.0], [300.0, 1.0], [400.0, 9.0], [6400.0, 1.0], [7100.0, 10.0], [7000.0, 3.0], [7400.0, 2.0], [7300.0, 8.0], [7200.0, 14.0], [7500.0, 1.0], [7700.0, 1.0], [7800.0, 1.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 15400.0, "title": "Response Time Distribution"}},
        getOptions: function() {
            var granularity = this.data.result.granularity;
            return {
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendResponseTimeDistribution'
                },
                xaxis:{
                    axisLabel: "Response times in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of responses",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                bars : {
                    show: true,
                    barWidth: this.data.result.granularity
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: function(label, xval, yval, flotItem){
                        return yval + " responses for " + label + " were between " + xval + " and " + (xval + granularity) + " ms";
                    }
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotResponseTimeDistribution"), prepareData(data.result.series, $("#choicesResponseTimeDistribution")), options);
        }

};

// Response time distribution
function refreshResponseTimeDistribution() {
    var infos = responseTimeDistributionInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyResponseTimeDistribution");
        return;
    }
    if (isGraph($("#flotResponseTimeDistribution"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesResponseTimeDistribution");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        $('#footerResponseTimeDistribution .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};


var syntheticResponseTimeDistributionInfos = {
        data: {"result": {"minY": 93.0, "minX": 0.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 780.0, "series": [{"data": [[0.0, 780.0]], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [[1.0, 93.0]], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [[2.0, 127.0]], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 2.0, "title": "Synthetic Response Times Distribution"}},
        getOptions: function() {
            return {
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendSyntheticResponseTimeDistribution'
                },
                xaxis:{
                    axisLabel: "Response times ranges",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                    tickLength:0,
                    min:-0.5,
                    max:3.5
                },
                yaxis: {
                    axisLabel: "Number of responses",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                bars : {
                    show: true,
                    align: "center",
                    barWidth: 0.25,
                    fill:.75
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: function(label, xval, yval, flotItem){
                        return yval + " " + label;
                    }
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var options = this.getOptions();
            prepareOptions(options, data);
            options.xaxis.ticks = data.result.ticks;
            $.plot($("#flotSyntheticResponseTimeDistribution"), prepareData(data.result.series, $("#choicesSyntheticResponseTimeDistribution")), options);
        }

};

// Response time distribution
function refreshSyntheticResponseTimeDistribution() {
    var infos = syntheticResponseTimeDistributionInfos;
    prepareSeries(infos.data, true);
    if (isGraph($("#flotSyntheticResponseTimeDistribution"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesSyntheticResponseTimeDistribution");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        $('#footerSyntheticResponseTimeDistribution .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var activeThreadsOverTimeInfos = {
        data: {"result": {"minY": 70.55300000000007, "minX": 1.60924986E12, "maxY": 70.55300000000007, "series": [{"data": [[1.60924986E12, 70.55300000000007]], "isOverall": false, "label": "Thread Group", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60924986E12, "title": "Active Threads Over Time"}},
        getOptions: function() {
            return {
                series: {
                    stack: true,
                    lines: {
                        show: true,
                        fill: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of active threads",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: {
                    noColumns: 6,
                    show: true,
                    container: '#legendActiveThreadsOverTime'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                selection: {
                    mode: 'xy'
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : At %x there were %y active threads"
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesActiveThreadsOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotActiveThreadsOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewActiveThreadsOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Active Threads Over Time
function refreshActiveThreadsOverTime(fixTimestamps) {
    var infos = activeThreadsOverTimeInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 3600000);
    }
    if(isGraph($("#flotActiveThreadsOverTime"))) {
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesActiveThreadsOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotActiveThreadsOverTime", "#overviewActiveThreadsOverTime");
        $('#footerActiveThreadsOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var timeVsThreadsInfos = {
        data: {"result": {"minY": 207.5, "minX": 1.0, "maxY": 15469.0, "series": [{"data": [[2.0, 15469.0], [3.0, 7672.5], [4.0, 7663.0], [5.0, 7727.5], [6.0, 3705.5], [7.0, 1891.75], [8.0, 974.75], [9.0, 1091.142857142857], [10.0, 1111.2857142857142], [11.0, 1291.3333333333335], [12.0, 988.25], [13.0, 1016.5], [14.0, 776.2727272727274], [15.0, 1037.0], [16.0, 864.2], [17.0, 1158.0], [18.0, 1212.7142857142858], [19.0, 1078.375], [20.0, 989.6666666666666], [21.0, 913.1999999999999], [22.0, 917.0], [23.0, 1095.0], [24.0, 1001.8888888888889], [25.0, 904.2], [26.0, 1376.3333333333333], [27.0, 1213.4285714285716], [28.0, 1370.3333333333333], [29.0, 909.5999999999999], [30.0, 1206.142857142857], [31.0, 2121.25], [32.0, 1591.2], [33.0, 630.7142857142857], [34.0, 1402.3333333333333], [35.0, 697.8333333333333], [36.0, 625.1428571428571], [37.0, 699.875], [38.0, 569.375], [39.0, 619.8571428571429], [40.0, 765.2857142857142], [41.0, 571.375], [42.0, 767.0], [43.0, 623.2857142857142], [44.0, 1199.5], [45.0, 619.5714285714286], [46.0, 566.125], [47.0, 922.75], [48.0, 498.80000000000007], [49.0, 530.2222222222222], [50.0, 758.0], [51.0, 697.5], [52.0, 619.0], [53.0, 567.625], [54.0, 499.5], [55.0, 809.8571428571429], [56.0, 1363.9999999999998], [57.0, 481.42857142857144], [58.0, 1000.2222222222222], [59.0, 473.0], [60.0, 594.0], [61.0, 355.33333333333337], [62.0, 690.5], [63.0, 365.57142857142856], [64.0, 478.85714285714283], [65.0, 480.42857142857144], [66.0, 946.75], [67.0, 597.375], [68.0, 334.2857142857143], [69.0, 421.77777777777777], [70.0, 916.2], [71.0, 478.0], [72.0, 1106.0], [73.0, 617.2857142857143], [74.0, 1915.875], [75.0, 621.4444444444445], [76.0, 1178.75], [77.0, 810.0000000000001], [78.0, 973.5714285714287], [79.0, 872.2222222222222], [80.0, 1008.0], [81.0, 949.1428571428571], [82.0, 782.6666666666666], [83.0, 763.8571428571429], [84.0, 1533.857142857143], [85.0, 446.6], [86.0, 421.3333333333333], [87.0, 761.0], [88.0, 1107.4444444444443], [89.0, 852.2500000000001], [90.0, 1205.142857142857], [91.0, 578.375], [92.0, 692.1111111111111], [93.0, 466.8888888888889], [94.0, 647.625], [95.0, 452.25], [96.0, 290.7], [97.0, 294.1111111111111], [98.0, 560.75], [99.0, 855.5555555555554], [100.0, 686.8333333333333], [101.0, 699.8571428571428], [102.0, 694.2222222222222], [103.0, 653.5], [104.0, 1226.5555555555557], [105.0, 593.4444444444445], [106.0, 874.1666666666667], [107.0, 928.3333333333333], [108.0, 528.8571428571429], [109.0, 1014.1111111111111], [110.0, 481.25], [111.0, 880.2222222222224], [112.0, 882.0], [113.0, 515.625], [114.0, 876.8333333333333], [115.0, 628.6666666666667], [116.0, 1811.8888888888891], [117.0, 218.42857142857142], [118.0, 728.5], [119.0, 320.5], [120.0, 217.0], [121.0, 775.0], [122.0, 444.09999999999997], [123.0, 360.5], [124.0, 1097.2500000000002], [125.0, 370.8888888888889], [126.0, 1365.888888888889], [127.0, 842.6250000000001], [128.0, 987.0], [129.0, 1124.888888888889], [130.0, 412.125], [131.0, 458.875], [132.0, 1149.0], [133.0, 902.25], [134.0, 1924.8333333333335], [135.0, 207.5], [1.0, 15339.0]], "isOverall": false, "label": "HTTP Request", "isController": false}, {"data": [[70.55300000000007, 892.0910000000001]], "isOverall": false, "label": "HTTP Request-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 135.0, "title": "Time VS Threads"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    axisLabel: "Number of active threads",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Average response times in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: { noColumns: 2,show: true, container: '#legendTimeVsThreads' },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s: At %x.2 active threads, Average response time was %y.2 ms"
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesTimeVsThreads"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotTimesVsThreads"), dataset, options);
            // setup overview
            $.plot($("#overviewTimesVsThreads"), dataset, prepareOverviewOptions(options));
        }
};

// Time vs threads
function refreshTimeVsThreads(){
    var infos = timeVsThreadsInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyTimeVsThreads");
        return;
    }
    if(isGraph($("#flotTimesVsThreads"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesTimeVsThreads");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotTimesVsThreads", "#overviewTimesVsThreads");
        $('#footerTimeVsThreads .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var bytesThroughputOverTimeInfos = {
        data : {"result": {"minY": 2000.0, "minX": 1.60924986E12, "maxY": 19959.333333333332, "series": [{"data": [[1.60924986E12, 19959.333333333332]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.60924986E12, 2000.0]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60924986E12, "title": "Bytes Throughput Over Time"}},
        getOptions : function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity) ,
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Bytes / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendBytesThroughputOverTime'
                },
                selection: {
                    mode: "xy"
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s at %x was %y"
                }
            };
        },
        createGraph : function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesBytesThroughputOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotBytesThroughputOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewBytesThroughputOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Bytes throughput Over Time
function refreshBytesThroughputOverTime(fixTimestamps) {
    var infos = bytesThroughputOverTimeInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 3600000);
    }
    if(isGraph($("#flotBytesThroughputOverTime"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesBytesThroughputOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotBytesThroughputOverTime", "#overviewBytesThroughputOverTime");
        $('#footerBytesThroughputOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
}

var responseTimesOverTimeInfos = {
        data: {"result": {"minY": 892.0910000000001, "minX": 1.60924986E12, "maxY": 892.0910000000001, "series": [{"data": [[1.60924986E12, 892.0910000000001]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60924986E12, "title": "Response Time Over Time"}},
        getOptions: function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Average response time in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendResponseTimesOverTime'
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : at %x Average response time was %y ms"
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesResponseTimesOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotResponseTimesOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewResponseTimesOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Response Times Over Time
function refreshResponseTimeOverTime(fixTimestamps) {
    var infos = responseTimesOverTimeInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyResponseTimeOverTime");
        return;
    }
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 3600000);
    }
    if(isGraph($("#flotResponseTimesOverTime"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesResponseTimesOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotResponseTimesOverTime", "#overviewResponseTimesOverTime");
        $('#footerResponseTimesOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var latenciesOverTimeInfos = {
        data: {"result": {"minY": 892.0819999999999, "minX": 1.60924986E12, "maxY": 892.0819999999999, "series": [{"data": [[1.60924986E12, 892.0819999999999]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60924986E12, "title": "Latencies Over Time"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Average response latencies in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendLatenciesOverTime'
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : at %x Average latency was %y ms"
                }
            };
        },
        createGraph: function () {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesLatenciesOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotLatenciesOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewLatenciesOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Latencies Over Time
function refreshLatenciesOverTime(fixTimestamps) {
    var infos = latenciesOverTimeInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyLatenciesOverTime");
        return;
    }
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 3600000);
    }
    if(isGraph($("#flotLatenciesOverTime"))) {
        infos.createGraph();
    }else {
        var choiceContainer = $("#choicesLatenciesOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotLatenciesOverTime", "#overviewLatenciesOverTime");
        $('#footerLatenciesOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var connectTimeOverTimeInfos = {
        data: {"result": {"minY": 663.3670000000002, "minX": 1.60924986E12, "maxY": 663.3670000000002, "series": [{"data": [[1.60924986E12, 663.3670000000002]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60924986E12, "title": "Connect Time Over Time"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getConnectTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Average Connect Time in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendConnectTimeOverTime'
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : at %x Average connect time was %y ms"
                }
            };
        },
        createGraph: function () {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesConnectTimeOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotConnectTimeOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewConnectTimeOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Connect Time Over Time
function refreshConnectTimeOverTime(fixTimestamps) {
    var infos = connectTimeOverTimeInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyConnectTimeOverTime");
        return;
    }
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 3600000);
    }
    if(isGraph($("#flotConnectTimeOverTime"))) {
        infos.createGraph();
    }else {
        var choiceContainer = $("#choicesConnectTimeOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotConnectTimeOverTime", "#overviewConnectTimeOverTime");
        $('#footerConnectTimeOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var responseTimePercentilesOverTimeInfos = {
        data: {"result": {"minY": 26.0, "minX": 1.60924986E12, "maxY": 15469.0, "series": [{"data": [[1.60924986E12, 15469.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.60924986E12, 3054.9]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.60924986E12, 7476.570000000001]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.60924986E12, 4113.149999999996]], "isOverall": false, "label": "95th percentile", "isController": false}, {"data": [[1.60924986E12, 26.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.60924986E12, 213.0]], "isOverall": false, "label": "Median", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60924986E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true,
                        fill: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Response Time in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendResponseTimePercentilesOverTime'
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : at %x Response time was %y ms"
                }
            };
        },
        createGraph: function () {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesResponseTimePercentilesOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotResponseTimePercentilesOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewResponseTimePercentilesOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Response Time Percentiles Over Time
function refreshResponseTimePercentilesOverTime(fixTimestamps) {
    var infos = responseTimePercentilesOverTimeInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 3600000);
    }
    if(isGraph($("#flotResponseTimePercentilesOverTime"))) {
        infos.createGraph();
    }else {
        var choiceContainer = $("#choicesResponseTimePercentilesOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotResponseTimePercentilesOverTime", "#overviewResponseTimePercentilesOverTime");
        $('#footerResponseTimePercentilesOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};


var responseTimeVsRequestInfos = {
    data: {"result": {"minY": 111.0, "minX": 2.0, "maxY": 15348.5, "series": [{"data": [[64.0, 111.0], [2.0, 15348.5], [87.0, 212.0], [86.0, 215.5], [85.0, 1142.0], [88.0, 209.0], [6.0, 7241.0], [3.0, 15339.0], [13.0, 7295.0], [14.0, 7154.0], [30.0, 3045.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 88.0, "title": "Response Time Vs Request"}},
    getOptions: function() {
        return {
            series: {
                lines: {
                    show: false
                },
                points: {
                    show: true
                }
            },
            xaxis: {
                axisLabel: "Global number of requests per second",
                axisLabelUseCanvas: true,
                axisLabelFontSizePixels: 12,
                axisLabelFontFamily: 'Verdana, Arial',
                axisLabelPadding: 20,
            },
            yaxis: {
                axisLabel: "Median Response Time in ms",
                axisLabelUseCanvas: true,
                axisLabelFontSizePixels: 12,
                axisLabelFontFamily: 'Verdana, Arial',
                axisLabelPadding: 20,
            },
            legend: {
                noColumns: 2,
                show: true,
                container: '#legendResponseTimeVsRequest'
            },
            selection: {
                mode: 'xy'
            },
            grid: {
                hoverable: true // IMPORTANT! this is needed for tooltip to work
            },
            tooltip: true,
            tooltipOpts: {
                content: "%s : Median response time at %x req/s was %y ms"
            },
            colors: ["#9ACD32", "#FF6347"]
        };
    },
    createGraph: function () {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesResponseTimeVsRequest"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotResponseTimeVsRequest"), dataset, options);
        // setup overview
        $.plot($("#overviewResponseTimeVsRequest"), dataset, prepareOverviewOptions(options));

    }
};

// Response Time vs Request
function refreshResponseTimeVsRequest() {
    var infos = responseTimeVsRequestInfos;
    prepareSeries(infos.data);
    if (isGraph($("#flotResponseTimeVsRequest"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesResponseTimeVsRequest");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotResponseTimeVsRequest", "#overviewResponseTimeVsRequest");
        $('#footerResponseRimeVsRequest .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};


var latenciesVsRequestInfos = {
    data: {"result": {"minY": 111.0, "minX": 2.0, "maxY": 15348.5, "series": [{"data": [[64.0, 111.0], [2.0, 15348.5], [87.0, 212.0], [86.0, 215.5], [85.0, 1142.0], [88.0, 209.0], [6.0, 7241.0], [3.0, 15339.0], [13.0, 7295.0], [14.0, 7154.0], [30.0, 3045.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 88.0, "title": "Latencies Vs Request"}},
    getOptions: function() {
        return{
            series: {
                lines: {
                    show: false
                },
                points: {
                    show: true
                }
            },
            xaxis: {
                axisLabel: "Global number of requests per second",
                axisLabelUseCanvas: true,
                axisLabelFontSizePixels: 12,
                axisLabelFontFamily: 'Verdana, Arial',
                axisLabelPadding: 20,
            },
            yaxis: {
                axisLabel: "Median Latency in ms",
                axisLabelUseCanvas: true,
                axisLabelFontSizePixels: 12,
                axisLabelFontFamily: 'Verdana, Arial',
                axisLabelPadding: 20,
            },
            legend: { noColumns: 2,show: true, container: '#legendLatencyVsRequest' },
            selection: {
                mode: 'xy'
            },
            grid: {
                hoverable: true // IMPORTANT! this is needed for tooltip to work
            },
            tooltip: true,
            tooltipOpts: {
                content: "%s : Median Latency time at %x req/s was %y ms"
            },
            colors: ["#9ACD32", "#FF6347"]
        };
    },
    createGraph: function () {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesLatencyVsRequest"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotLatenciesVsRequest"), dataset, options);
        // setup overview
        $.plot($("#overviewLatenciesVsRequest"), dataset, prepareOverviewOptions(options));
    }
};

// Latencies vs Request
function refreshLatenciesVsRequest() {
        var infos = latenciesVsRequestInfos;
        prepareSeries(infos.data);
        if(isGraph($("#flotLatenciesVsRequest"))){
            infos.createGraph();
        }else{
            var choiceContainer = $("#choicesLatencyVsRequest");
            createLegend(choiceContainer, infos);
            infos.createGraph();
            setGraphZoomable("#flotLatenciesVsRequest", "#overviewLatenciesVsRequest");
            $('#footerLatenciesVsRequest .legendColorBox > div').each(function(i){
                $(this).clone().prependTo(choiceContainer.find("li").eq(i));
            });
        }
};

var hitsPerSecondInfos = {
        data: {"result": {"minY": 16.666666666666668, "minX": 1.60924986E12, "maxY": 16.666666666666668, "series": [{"data": [[1.60924986E12, 16.666666666666668]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60924986E12, "title": "Hits Per Second"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of hits / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: "#legendHitsPerSecond"
                },
                selection: {
                    mode : 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s at %x was %y.2 hits/sec"
                }
            };
        },
        createGraph: function createGraph() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesHitsPerSecond"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotHitsPerSecond"), dataset, options);
            // setup overview
            $.plot($("#overviewHitsPerSecond"), dataset, prepareOverviewOptions(options));
        }
};

// Hits per second
function refreshHitsPerSecond(fixTimestamps) {
    var infos = hitsPerSecondInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 3600000);
    }
    if (isGraph($("#flotHitsPerSecond"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesHitsPerSecond");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotHitsPerSecond", "#overviewHitsPerSecond");
        $('#footerHitsPerSecond .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
}

var codesPerSecondInfos = {
        data: {"result": {"minY": 16.666666666666668, "minX": 1.60924986E12, "maxY": 16.666666666666668, "series": [{"data": [[1.60924986E12, 16.666666666666668]], "isOverall": false, "label": "200", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60924986E12, "title": "Codes Per Second"}},
        getOptions: function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of responses / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: "#legendCodesPerSecond"
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "Number of Response Codes %s at %x was %y.2 responses / sec"
                }
            };
        },
    createGraph: function() {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesCodesPerSecond"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotCodesPerSecond"), dataset, options);
        // setup overview
        $.plot($("#overviewCodesPerSecond"), dataset, prepareOverviewOptions(options));
    }
};

// Codes per second
function refreshCodesPerSecond(fixTimestamps) {
    var infos = codesPerSecondInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 3600000);
    }
    if(isGraph($("#flotCodesPerSecond"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesCodesPerSecond");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotCodesPerSecond", "#overviewCodesPerSecond");
        $('#footerCodesPerSecond .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var transactionsPerSecondInfos = {
        data: {"result": {"minY": 16.666666666666668, "minX": 1.60924986E12, "maxY": 16.666666666666668, "series": [{"data": [[1.60924986E12, 16.666666666666668]], "isOverall": false, "label": "HTTP Request-success", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60924986E12, "title": "Transactions Per Second"}},
        getOptions: function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of transactions / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: "#legendTransactionsPerSecond"
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s at %x was %y transactions / sec"
                }
            };
        },
    createGraph: function () {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesTransactionsPerSecond"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotTransactionsPerSecond"), dataset, options);
        // setup overview
        $.plot($("#overviewTransactionsPerSecond"), dataset, prepareOverviewOptions(options));
    }
};

// Transactions per second
function refreshTransactionsPerSecond(fixTimestamps) {
    var infos = transactionsPerSecondInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyTransactionsPerSecond");
        return;
    }
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 3600000);
    }
    if(isGraph($("#flotTransactionsPerSecond"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesTransactionsPerSecond");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotTransactionsPerSecond", "#overviewTransactionsPerSecond");
        $('#footerTransactionsPerSecond .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var totalTPSInfos = {
        data: {"result": {"minY": 16.666666666666668, "minX": 1.60924986E12, "maxY": 16.666666666666668, "series": [{"data": [[1.60924986E12, 16.666666666666668]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60924986E12, "title": "Total Transactions Per Second"}},
        getOptions: function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of transactions / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: "#legendTotalTPS"
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s at %x was %y transactions / sec"
                },
                colors: ["#9ACD32", "#FF6347"]
            };
        },
    createGraph: function () {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesTotalTPS"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotTotalTPS"), dataset, options);
        // setup overview
        $.plot($("#overviewTotalTPS"), dataset, prepareOverviewOptions(options));
    }
};

// Total Transactions per second
function refreshTotalTPS(fixTimestamps) {
    var infos = totalTPSInfos;
    // We want to ignore seriesFilter
    prepareSeries(infos.data, false, true);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 3600000);
    }
    if(isGraph($("#flotTotalTPS"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesTotalTPS");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotTotalTPS", "#overviewTotalTPS");
        $('#footerTotalTPS .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

// Collapse the graph matching the specified DOM element depending the collapsed
// status
function collapse(elem, collapsed){
    if(collapsed){
        $(elem).parent().find(".fa-chevron-up").removeClass("fa-chevron-up").addClass("fa-chevron-down");
    } else {
        $(elem).parent().find(".fa-chevron-down").removeClass("fa-chevron-down").addClass("fa-chevron-up");
        if (elem.id == "bodyBytesThroughputOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshBytesThroughputOverTime(true);
            }
            document.location.href="#bytesThroughputOverTime";
        } else if (elem.id == "bodyLatenciesOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshLatenciesOverTime(true);
            }
            document.location.href="#latenciesOverTime";
        } else if (elem.id == "bodyCustomGraph") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshCustomGraph(true);
            }
            document.location.href="#responseCustomGraph";
        } else if (elem.id == "bodyConnectTimeOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshConnectTimeOverTime(true);
            }
            document.location.href="#connectTimeOverTime";
        } else if (elem.id == "bodyResponseTimePercentilesOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshResponseTimePercentilesOverTime(true);
            }
            document.location.href="#responseTimePercentilesOverTime";
        } else if (elem.id == "bodyResponseTimeDistribution") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshResponseTimeDistribution();
            }
            document.location.href="#responseTimeDistribution" ;
        } else if (elem.id == "bodySyntheticResponseTimeDistribution") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshSyntheticResponseTimeDistribution();
            }
            document.location.href="#syntheticResponseTimeDistribution" ;
        } else if (elem.id == "bodyActiveThreadsOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshActiveThreadsOverTime(true);
            }
            document.location.href="#activeThreadsOverTime";
        } else if (elem.id == "bodyTimeVsThreads") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshTimeVsThreads();
            }
            document.location.href="#timeVsThreads" ;
        } else if (elem.id == "bodyCodesPerSecond") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshCodesPerSecond(true);
            }
            document.location.href="#codesPerSecond";
        } else if (elem.id == "bodyTransactionsPerSecond") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshTransactionsPerSecond(true);
            }
            document.location.href="#transactionsPerSecond";
        } else if (elem.id == "bodyTotalTPS") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshTotalTPS(true);
            }
            document.location.href="#totalTPS";
        } else if (elem.id == "bodyResponseTimeVsRequest") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshResponseTimeVsRequest();
            }
            document.location.href="#responseTimeVsRequest";
        } else if (elem.id == "bodyLatenciesVsRequest") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshLatenciesVsRequest();
            }
            document.location.href="#latencyVsRequest";
        }
    }
}

/*
 * Activates or deactivates all series of the specified graph (represented by id parameter)
 * depending on checked argument.
 */
function toggleAll(id, checked){
    var placeholder = document.getElementById(id);

    var cases = $(placeholder).find(':checkbox');
    cases.prop('checked', checked);
    $(cases).parent().children().children().toggleClass("legend-disabled", !checked);

    var choiceContainer;
    if ( id == "choicesBytesThroughputOverTime"){
        choiceContainer = $("#choicesBytesThroughputOverTime");
        refreshBytesThroughputOverTime(false);
    } else if(id == "choicesResponseTimesOverTime"){
        choiceContainer = $("#choicesResponseTimesOverTime");
        refreshResponseTimeOverTime(false);
    }else if(id == "choicesResponseCustomGraph"){
        choiceContainer = $("#choicesResponseCustomGraph");
        refreshCustomGraph(false);
    } else if ( id == "choicesLatenciesOverTime"){
        choiceContainer = $("#choicesLatenciesOverTime");
        refreshLatenciesOverTime(false);
    } else if ( id == "choicesConnectTimeOverTime"){
        choiceContainer = $("#choicesConnectTimeOverTime");
        refreshConnectTimeOverTime(false);
    } else if ( id == "choicesResponseTimePercentilesOverTime"){
        choiceContainer = $("#choicesResponseTimePercentilesOverTime");
        refreshResponseTimePercentilesOverTime(false);
    } else if ( id == "choicesResponseTimePercentiles"){
        choiceContainer = $("#choicesResponseTimePercentiles");
        refreshResponseTimePercentiles();
    } else if(id == "choicesActiveThreadsOverTime"){
        choiceContainer = $("#choicesActiveThreadsOverTime");
        refreshActiveThreadsOverTime(false);
    } else if ( id == "choicesTimeVsThreads"){
        choiceContainer = $("#choicesTimeVsThreads");
        refreshTimeVsThreads();
    } else if ( id == "choicesSyntheticResponseTimeDistribution"){
        choiceContainer = $("#choicesSyntheticResponseTimeDistribution");
        refreshSyntheticResponseTimeDistribution();
    } else if ( id == "choicesResponseTimeDistribution"){
        choiceContainer = $("#choicesResponseTimeDistribution");
        refreshResponseTimeDistribution();
    } else if ( id == "choicesHitsPerSecond"){
        choiceContainer = $("#choicesHitsPerSecond");
        refreshHitsPerSecond(false);
    } else if(id == "choicesCodesPerSecond"){
        choiceContainer = $("#choicesCodesPerSecond");
        refreshCodesPerSecond(false);
    } else if ( id == "choicesTransactionsPerSecond"){
        choiceContainer = $("#choicesTransactionsPerSecond");
        refreshTransactionsPerSecond(false);
    } else if ( id == "choicesTotalTPS"){
        choiceContainer = $("#choicesTotalTPS");
        refreshTotalTPS(false);
    } else if ( id == "choicesResponseTimeVsRequest"){
        choiceContainer = $("#choicesResponseTimeVsRequest");
        refreshResponseTimeVsRequest();
    } else if ( id == "choicesLatencyVsRequest"){
        choiceContainer = $("#choicesLatencyVsRequest");
        refreshLatenciesVsRequest();
    }
    var color = checked ? "black" : "#818181";
    if(choiceContainer != null) {
        choiceContainer.find("label").each(function(){
            this.style.color = color;
        });
    }
}

