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
        data: {"result": {"minY": 16.0, "minX": 0.0, "maxY": 15486.0, "series": [{"data": [[0.0, 16.0], [0.1, 22.0], [0.2, 25.0], [0.3, 25.0], [0.4, 37.0], [0.5, 47.0], [0.6, 58.0], [0.7, 66.0], [0.8, 67.0], [0.9, 68.0], [1.0, 71.0], [1.1, 73.0], [1.2, 75.0], [1.3, 75.0], [1.4, 77.0], [1.5, 77.0], [1.6, 78.0], [1.7, 81.0], [1.8, 82.0], [1.9, 82.0], [2.0, 85.0], [2.1, 91.0], [2.2, 92.0], [2.3, 92.0], [2.4, 97.0], [2.5, 100.0], [2.6, 100.0], [2.7, 104.0], [2.8, 104.0], [2.9, 108.0], [3.0, 108.0], [3.1, 108.0], [3.2, 110.0], [3.3, 112.0], [3.4, 115.0], [3.5, 115.0], [3.6, 117.0], [3.7, 119.0], [3.8, 120.0], [3.9, 120.0], [4.0, 121.0], [4.1, 123.0], [4.2, 126.0], [4.3, 126.0], [4.4, 130.0], [4.5, 130.0], [4.6, 130.0], [4.7, 132.0], [4.8, 132.0], [4.9, 133.0], [5.0, 134.0], [5.1, 134.0], [5.2, 137.0], [5.3, 139.0], [5.4, 140.0], [5.5, 140.0], [5.6, 142.0], [5.7, 143.0], [5.8, 144.0], [5.9, 145.0], [6.0, 145.0], [6.1, 147.0], [6.2, 149.0], [6.3, 149.0], [6.4, 150.0], [6.5, 151.0], [6.6, 152.0], [6.7, 153.0], [6.8, 155.0], [6.9, 157.0], [7.0, 159.0], [7.1, 159.0], [7.2, 161.0], [7.3, 161.0], [7.4, 161.0], [7.5, 163.0], [7.6, 165.0], [7.7, 167.0], [7.8, 168.0], [7.9, 169.0], [8.0, 169.0], [8.1, 170.0], [8.2, 171.0], [8.3, 172.0], [8.4, 174.0], [8.5, 174.0], [8.6, 175.0], [8.7, 175.0], [8.8, 176.0], [8.9, 179.0], [9.0, 179.0], [9.1, 181.0], [9.2, 182.0], [9.3, 183.0], [9.4, 185.0], [9.5, 185.0], [9.6, 186.0], [9.7, 188.0], [9.8, 189.0], [9.9, 190.0], [10.0, 190.0], [10.1, 191.0], [10.2, 191.0], [10.3, 192.0], [10.4, 192.0], [10.5, 192.0], [10.6, 192.0], [10.7, 192.0], [10.8, 192.0], [10.9, 193.0], [11.0, 193.0], [11.1, 193.0], [11.2, 193.0], [11.3, 193.0], [11.4, 193.0], [11.5, 194.0], [11.6, 194.0], [11.7, 194.0], [11.8, 194.0], [11.9, 194.0], [12.0, 194.0], [12.1, 194.0], [12.2, 194.0], [12.3, 194.0], [12.4, 195.0], [12.5, 195.0], [12.6, 195.0], [12.7, 195.0], [12.8, 195.0], [12.9, 195.0], [13.0, 195.0], [13.1, 195.0], [13.2, 196.0], [13.3, 196.0], [13.4, 196.0], [13.5, 196.0], [13.6, 196.0], [13.7, 196.0], [13.8, 196.0], [13.9, 196.0], [14.0, 196.0], [14.1, 196.0], [14.2, 196.0], [14.3, 196.0], [14.4, 197.0], [14.5, 197.0], [14.6, 197.0], [14.7, 197.0], [14.8, 197.0], [14.9, 197.0], [15.0, 197.0], [15.1, 197.0], [15.2, 198.0], [15.3, 198.0], [15.4, 198.0], [15.5, 198.0], [15.6, 198.0], [15.7, 198.0], [15.8, 198.0], [15.9, 199.0], [16.0, 199.0], [16.1, 199.0], [16.2, 199.0], [16.3, 199.0], [16.4, 199.0], [16.5, 199.0], [16.6, 199.0], [16.7, 199.0], [16.8, 199.0], [16.9, 199.0], [17.0, 200.0], [17.1, 200.0], [17.2, 200.0], [17.3, 200.0], [17.4, 200.0], [17.5, 200.0], [17.6, 200.0], [17.7, 200.0], [17.8, 200.0], [17.9, 200.0], [18.0, 201.0], [18.1, 201.0], [18.2, 201.0], [18.3, 201.0], [18.4, 201.0], [18.5, 201.0], [18.6, 201.0], [18.7, 201.0], [18.8, 201.0], [18.9, 201.0], [19.0, 202.0], [19.1, 202.0], [19.2, 202.0], [19.3, 202.0], [19.4, 202.0], [19.5, 202.0], [19.6, 202.0], [19.7, 202.0], [19.8, 202.0], [19.9, 202.0], [20.0, 202.0], [20.1, 202.0], [20.2, 202.0], [20.3, 202.0], [20.4, 202.0], [20.5, 203.0], [20.6, 203.0], [20.7, 203.0], [20.8, 203.0], [20.9, 203.0], [21.0, 203.0], [21.1, 203.0], [21.2, 203.0], [21.3, 203.0], [21.4, 203.0], [21.5, 203.0], [21.6, 203.0], [21.7, 203.0], [21.8, 203.0], [21.9, 203.0], [22.0, 203.0], [22.1, 203.0], [22.2, 203.0], [22.3, 203.0], [22.4, 203.0], [22.5, 203.0], [22.6, 203.0], [22.7, 203.0], [22.8, 203.0], [22.9, 203.0], [23.0, 203.0], [23.1, 203.0], [23.2, 203.0], [23.3, 203.0], [23.4, 203.0], [23.5, 203.0], [23.6, 203.0], [23.7, 203.0], [23.8, 203.0], [23.9, 203.0], [24.0, 203.0], [24.1, 203.0], [24.2, 203.0], [24.3, 203.0], [24.4, 203.0], [24.5, 203.0], [24.6, 203.0], [24.7, 203.0], [24.8, 203.0], [24.9, 203.0], [25.0, 203.0], [25.1, 203.0], [25.2, 203.0], [25.3, 203.0], [25.4, 203.0], [25.5, 203.0], [25.6, 203.0], [25.7, 203.0], [25.8, 204.0], [25.9, 204.0], [26.0, 204.0], [26.1, 204.0], [26.2, 204.0], [26.3, 204.0], [26.4, 204.0], [26.5, 204.0], [26.6, 204.0], [26.7, 204.0], [26.8, 204.0], [26.9, 204.0], [27.0, 204.0], [27.1, 204.0], [27.2, 204.0], [27.3, 204.0], [27.4, 204.0], [27.5, 204.0], [27.6, 204.0], [27.7, 204.0], [27.8, 204.0], [27.9, 204.0], [28.0, 204.0], [28.1, 204.0], [28.2, 204.0], [28.3, 204.0], [28.4, 204.0], [28.5, 204.0], [28.6, 204.0], [28.7, 204.0], [28.8, 204.0], [28.9, 204.0], [29.0, 204.0], [29.1, 204.0], [29.2, 204.0], [29.3, 204.0], [29.4, 204.0], [29.5, 204.0], [29.6, 204.0], [29.7, 204.0], [29.8, 204.0], [29.9, 204.0], [30.0, 204.0], [30.1, 204.0], [30.2, 204.0], [30.3, 204.0], [30.4, 204.0], [30.5, 205.0], [30.6, 205.0], [30.7, 205.0], [30.8, 205.0], [30.9, 205.0], [31.0, 205.0], [31.1, 205.0], [31.2, 205.0], [31.3, 205.0], [31.4, 205.0], [31.5, 205.0], [31.6, 205.0], [31.7, 205.0], [31.8, 205.0], [31.9, 205.0], [32.0, 205.0], [32.1, 205.0], [32.2, 205.0], [32.3, 205.0], [32.4, 205.0], [32.5, 205.0], [32.6, 205.0], [32.7, 205.0], [32.8, 205.0], [32.9, 205.0], [33.0, 205.0], [33.1, 205.0], [33.2, 205.0], [33.3, 205.0], [33.4, 205.0], [33.5, 205.0], [33.6, 205.0], [33.7, 205.0], [33.8, 205.0], [33.9, 205.0], [34.0, 205.0], [34.1, 205.0], [34.2, 205.0], [34.3, 205.0], [34.4, 205.0], [34.5, 205.0], [34.6, 205.0], [34.7, 205.0], [34.8, 205.0], [34.9, 205.0], [35.0, 205.0], [35.1, 205.0], [35.2, 205.0], [35.3, 205.0], [35.4, 205.0], [35.5, 205.0], [35.6, 205.0], [35.7, 205.0], [35.8, 205.0], [35.9, 205.0], [36.0, 205.0], [36.1, 205.0], [36.2, 205.0], [36.3, 205.0], [36.4, 205.0], [36.5, 205.0], [36.6, 205.0], [36.7, 205.0], [36.8, 205.0], [36.9, 205.0], [37.0, 206.0], [37.1, 206.0], [37.2, 206.0], [37.3, 206.0], [37.4, 206.0], [37.5, 206.0], [37.6, 206.0], [37.7, 206.0], [37.8, 206.0], [37.9, 206.0], [38.0, 206.0], [38.1, 206.0], [38.2, 206.0], [38.3, 206.0], [38.4, 206.0], [38.5, 206.0], [38.6, 206.0], [38.7, 206.0], [38.8, 206.0], [38.9, 206.0], [39.0, 206.0], [39.1, 206.0], [39.2, 206.0], [39.3, 206.0], [39.4, 206.0], [39.5, 206.0], [39.6, 206.0], [39.7, 206.0], [39.8, 206.0], [39.9, 206.0], [40.0, 206.0], [40.1, 206.0], [40.2, 206.0], [40.3, 206.0], [40.4, 206.0], [40.5, 206.0], [40.6, 206.0], [40.7, 206.0], [40.8, 206.0], [40.9, 206.0], [41.0, 206.0], [41.1, 206.0], [41.2, 206.0], [41.3, 206.0], [41.4, 206.0], [41.5, 206.0], [41.6, 206.0], [41.7, 206.0], [41.8, 206.0], [41.9, 206.0], [42.0, 206.0], [42.1, 206.0], [42.2, 206.0], [42.3, 207.0], [42.4, 207.0], [42.5, 207.0], [42.6, 207.0], [42.7, 207.0], [42.8, 207.0], [42.9, 207.0], [43.0, 207.0], [43.1, 207.0], [43.2, 207.0], [43.3, 207.0], [43.4, 207.0], [43.5, 207.0], [43.6, 207.0], [43.7, 207.0], [43.8, 207.0], [43.9, 207.0], [44.0, 207.0], [44.1, 207.0], [44.2, 207.0], [44.3, 207.0], [44.4, 207.0], [44.5, 207.0], [44.6, 207.0], [44.7, 207.0], [44.8, 207.0], [44.9, 207.0], [45.0, 207.0], [45.1, 207.0], [45.2, 207.0], [45.3, 207.0], [45.4, 207.0], [45.5, 207.0], [45.6, 207.0], [45.7, 207.0], [45.8, 207.0], [45.9, 207.0], [46.0, 207.0], [46.1, 207.0], [46.2, 207.0], [46.3, 207.0], [46.4, 207.0], [46.5, 207.0], [46.6, 207.0], [46.7, 207.0], [46.8, 207.0], [46.9, 207.0], [47.0, 207.0], [47.1, 208.0], [47.2, 208.0], [47.3, 208.0], [47.4, 208.0], [47.5, 208.0], [47.6, 208.0], [47.7, 208.0], [47.8, 208.0], [47.9, 208.0], [48.0, 208.0], [48.1, 208.0], [48.2, 208.0], [48.3, 208.0], [48.4, 208.0], [48.5, 208.0], [48.6, 208.0], [48.7, 208.0], [48.8, 208.0], [48.9, 208.0], [49.0, 208.0], [49.1, 208.0], [49.2, 208.0], [49.3, 208.0], [49.4, 208.0], [49.5, 208.0], [49.6, 208.0], [49.7, 208.0], [49.8, 208.0], [49.9, 208.0], [50.0, 208.0], [50.1, 208.0], [50.2, 208.0], [50.3, 208.0], [50.4, 208.0], [50.5, 208.0], [50.6, 208.0], [50.7, 208.0], [50.8, 208.0], [50.9, 208.0], [51.0, 208.0], [51.1, 208.0], [51.2, 208.0], [51.3, 208.0], [51.4, 208.0], [51.5, 208.0], [51.6, 208.0], [51.7, 208.0], [51.8, 208.0], [51.9, 208.0], [52.0, 208.0], [52.1, 208.0], [52.2, 208.0], [52.3, 208.0], [52.4, 208.0], [52.5, 208.0], [52.6, 208.0], [52.7, 208.0], [52.8, 208.0], [52.9, 208.0], [53.0, 209.0], [53.1, 209.0], [53.2, 209.0], [53.3, 209.0], [53.4, 209.0], [53.5, 209.0], [53.6, 209.0], [53.7, 209.0], [53.8, 209.0], [53.9, 209.0], [54.0, 209.0], [54.1, 209.0], [54.2, 209.0], [54.3, 209.0], [54.4, 209.0], [54.5, 209.0], [54.6, 209.0], [54.7, 209.0], [54.8, 209.0], [54.9, 209.0], [55.0, 209.0], [55.1, 209.0], [55.2, 209.0], [55.3, 209.0], [55.4, 209.0], [55.5, 209.0], [55.6, 209.0], [55.7, 209.0], [55.8, 209.0], [55.9, 209.0], [56.0, 209.0], [56.1, 209.0], [56.2, 209.0], [56.3, 209.0], [56.4, 209.0], [56.5, 209.0], [56.6, 209.0], [56.7, 209.0], [56.8, 209.0], [56.9, 209.0], [57.0, 209.0], [57.1, 209.0], [57.2, 209.0], [57.3, 209.0], [57.4, 209.0], [57.5, 209.0], [57.6, 209.0], [57.7, 209.0], [57.8, 209.0], [57.9, 209.0], [58.0, 209.0], [58.1, 209.0], [58.2, 209.0], [58.3, 209.0], [58.4, 209.0], [58.5, 209.0], [58.6, 209.0], [58.7, 209.0], [58.8, 209.0], [58.9, 209.0], [59.0, 209.0], [59.1, 210.0], [59.2, 210.0], [59.3, 210.0], [59.4, 210.0], [59.5, 210.0], [59.6, 210.0], [59.7, 210.0], [59.8, 210.0], [59.9, 210.0], [60.0, 210.0], [60.1, 210.0], [60.2, 210.0], [60.3, 210.0], [60.4, 210.0], [60.5, 210.0], [60.6, 210.0], [60.7, 210.0], [60.8, 210.0], [60.9, 210.0], [61.0, 210.0], [61.1, 210.0], [61.2, 210.0], [61.3, 210.0], [61.4, 210.0], [61.5, 210.0], [61.6, 210.0], [61.7, 210.0], [61.8, 210.0], [61.9, 210.0], [62.0, 210.0], [62.1, 210.0], [62.2, 210.0], [62.3, 210.0], [62.4, 210.0], [62.5, 210.0], [62.6, 210.0], [62.7, 210.0], [62.8, 210.0], [62.9, 210.0], [63.0, 210.0], [63.1, 210.0], [63.2, 210.0], [63.3, 210.0], [63.4, 210.0], [63.5, 210.0], [63.6, 210.0], [63.7, 210.0], [63.8, 210.0], [63.9, 210.0], [64.0, 210.0], [64.1, 210.0], [64.2, 210.0], [64.3, 210.0], [64.4, 210.0], [64.5, 210.0], [64.6, 210.0], [64.7, 210.0], [64.8, 210.0], [64.9, 211.0], [65.0, 211.0], [65.1, 211.0], [65.2, 211.0], [65.3, 211.0], [65.4, 211.0], [65.5, 211.0], [65.6, 211.0], [65.7, 211.0], [65.8, 211.0], [65.9, 211.0], [66.0, 211.0], [66.1, 211.0], [66.2, 211.0], [66.3, 211.0], [66.4, 211.0], [66.5, 211.0], [66.6, 211.0], [66.7, 211.0], [66.8, 211.0], [66.9, 211.0], [67.0, 211.0], [67.1, 211.0], [67.2, 211.0], [67.3, 211.0], [67.4, 211.0], [67.5, 211.0], [67.6, 211.0], [67.7, 211.0], [67.8, 211.0], [67.9, 211.0], [68.0, 211.0], [68.1, 211.0], [68.2, 211.0], [68.3, 211.0], [68.4, 211.0], [68.5, 211.0], [68.6, 211.0], [68.7, 211.0], [68.8, 211.0], [68.9, 211.0], [69.0, 211.0], [69.1, 211.0], [69.2, 211.0], [69.3, 211.0], [69.4, 211.0], [69.5, 211.0], [69.6, 211.0], [69.7, 211.0], [69.8, 211.0], [69.9, 211.0], [70.0, 211.0], [70.1, 211.0], [70.2, 211.0], [70.3, 211.0], [70.4, 211.0], [70.5, 211.0], [70.6, 211.0], [70.7, 211.0], [70.8, 211.0], [70.9, 211.0], [71.0, 211.0], [71.1, 211.0], [71.2, 211.0], [71.3, 211.0], [71.4, 211.0], [71.5, 211.0], [71.6, 211.0], [71.7, 211.0], [71.8, 211.0], [71.9, 211.0], [72.0, 212.0], [72.1, 212.0], [72.2, 212.0], [72.3, 212.0], [72.4, 212.0], [72.5, 212.0], [72.6, 212.0], [72.7, 212.0], [72.8, 212.0], [72.9, 212.0], [73.0, 212.0], [73.1, 212.0], [73.2, 212.0], [73.3, 212.0], [73.4, 212.0], [73.5, 212.0], [73.6, 212.0], [73.7, 212.0], [73.8, 212.0], [73.9, 212.0], [74.0, 212.0], [74.1, 212.0], [74.2, 212.0], [74.3, 212.0], [74.4, 212.0], [74.5, 212.0], [74.6, 212.0], [74.7, 212.0], [74.8, 212.0], [74.9, 212.0], [75.0, 212.0], [75.1, 212.0], [75.2, 212.0], [75.3, 212.0], [75.4, 212.0], [75.5, 212.0], [75.6, 212.0], [75.7, 212.0], [75.8, 212.0], [75.9, 212.0], [76.0, 212.0], [76.1, 212.0], [76.2, 212.0], [76.3, 212.0], [76.4, 212.0], [76.5, 212.0], [76.6, 212.0], [76.7, 212.0], [76.8, 212.0], [76.9, 212.0], [77.0, 212.0], [77.1, 212.0], [77.2, 212.0], [77.3, 213.0], [77.4, 213.0], [77.5, 213.0], [77.6, 213.0], [77.7, 213.0], [77.8, 213.0], [77.9, 213.0], [78.0, 213.0], [78.1, 213.0], [78.2, 213.0], [78.3, 213.0], [78.4, 213.0], [78.5, 213.0], [78.6, 213.0], [78.7, 213.0], [78.8, 213.0], [78.9, 213.0], [79.0, 213.0], [79.1, 214.0], [79.2, 214.0], [79.3, 214.0], [79.4, 214.0], [79.5, 214.0], [79.6, 214.0], [79.7, 214.0], [79.8, 214.0], [79.9, 214.0], [80.0, 215.0], [80.1, 215.0], [80.2, 216.0], [80.3, 216.0], [80.4, 216.0], [80.5, 217.0], [80.6, 219.0], [80.7, 287.0], [80.8, 289.0], [80.9, 406.0], [81.0, 414.0], [81.1, 415.0], [81.2, 416.0], [81.3, 417.0], [81.4, 597.0], [81.5, 618.0], [81.6, 618.0], [81.7, 619.0], [81.8, 626.0], [81.9, 1013.0], [82.0, 1019.0], [82.1, 1028.0], [82.2, 1030.0], [82.3, 1031.0], [82.4, 1031.0], [82.5, 1035.0], [82.6, 1036.0], [82.7, 1037.0], [82.8, 1040.0], [82.9, 1049.0], [83.0, 1052.0], [83.1, 1058.0], [83.2, 1069.0], [83.3, 1070.0], [83.4, 1089.0], [83.5, 1097.0], [83.6, 1119.0], [83.7, 1132.0], [83.8, 1133.0], [83.9, 1135.0], [84.0, 1152.0], [84.1, 1163.0], [84.2, 1171.0], [84.3, 1174.0], [84.4, 1181.0], [84.5, 1206.0], [84.6, 1207.0], [84.7, 1208.0], [84.8, 1209.0], [84.9, 1211.0], [85.0, 1212.0], [85.1, 1215.0], [85.2, 1215.0], [85.3, 1216.0], [85.4, 1216.0], [85.5, 1219.0], [85.6, 1220.0], [85.7, 1220.0], [85.8, 1223.0], [85.9, 1223.0], [86.0, 1225.0], [86.1, 1225.0], [86.2, 1226.0], [86.3, 1227.0], [86.4, 1227.0], [86.5, 1227.0], [86.6, 1228.0], [86.7, 1228.0], [86.8, 1228.0], [86.9, 1228.0], [87.0, 1228.0], [87.1, 1229.0], [87.2, 1229.0], [87.3, 1230.0], [87.4, 1231.0], [87.5, 1231.0], [87.6, 1232.0], [87.7, 1232.0], [87.8, 1233.0], [87.9, 1234.0], [88.0, 1234.0], [88.1, 1234.0], [88.2, 1234.0], [88.3, 1235.0], [88.4, 1235.0], [88.5, 1236.0], [88.6, 1236.0], [88.7, 1236.0], [88.8, 1238.0], [88.9, 1238.0], [89.0, 1241.0], [89.1, 1242.0], [89.2, 1246.0], [89.3, 1417.0], [89.4, 1424.0], [89.5, 1425.0], [89.6, 1427.0], [89.7, 1427.0], [89.8, 1428.0], [89.9, 1435.0], [90.0, 1437.0], [90.1, 1611.0], [90.2, 1635.0], [90.3, 1643.0], [90.4, 1936.0], [90.5, 2045.0], [90.6, 2045.0], [90.7, 2049.0], [90.8, 2056.0], [90.9, 2066.0], [91.0, 2074.0], [91.1, 2077.0], [91.2, 2759.0], [91.3, 2843.0], [91.4, 2858.0], [91.5, 2881.0], [91.6, 3032.0], [91.7, 3044.0], [91.8, 3046.0], [91.9, 3048.0], [92.0, 3052.0], [92.1, 3053.0], [92.2, 3053.0], [92.3, 3054.0], [92.4, 3056.0], [92.5, 3057.0], [92.6, 3059.0], [92.7, 3060.0], [92.8, 3060.0], [92.9, 3062.0], [93.0, 3063.0], [93.1, 3064.0], [93.2, 3067.0], [93.3, 3069.0], [93.4, 3070.0], [93.5, 3072.0], [93.6, 3089.0], [93.7, 3146.0], [93.8, 3160.0], [93.9, 3161.0], [94.0, 3168.0], [94.1, 3210.0], [94.2, 3215.0], [94.3, 3224.0], [94.4, 3228.0], [94.5, 3229.0], [94.6, 3232.0], [94.7, 3234.0], [94.8, 3240.0], [94.9, 3243.0], [95.0, 3245.0], [95.1, 3247.0], [95.2, 3249.0], [95.3, 3250.0], [95.4, 3446.0], [95.5, 3461.0], [95.6, 3632.0], [95.7, 3636.0], [95.8, 3653.0], [95.9, 3653.0], [96.0, 3661.0], [96.1, 4054.0], [96.2, 4064.0], [96.3, 4066.0], [96.4, 4066.0], [96.5, 4076.0], [96.6, 4431.0], [96.7, 4771.0], [96.8, 4857.0], [96.9, 6428.0], [97.0, 7082.0], [97.1, 7099.0], [97.2, 7106.0], [97.3, 7123.0], [97.4, 7149.0], [97.5, 7153.0], [97.6, 7162.0], [97.7, 7168.0], [97.8, 7172.0], [97.9, 7173.0], [98.0, 7195.0], [98.1, 7196.0], [98.2, 7205.0], [98.3, 7244.0], [98.4, 7249.0], [98.5, 7271.0], [98.6, 7272.0], [98.7, 7282.0], [98.8, 7306.0], [98.9, 7308.0], [99.0, 7315.0], [99.1, 7315.0], [99.2, 7316.0], [99.3, 7325.0], [99.4, 7342.0], [99.5, 7382.0], [99.6, 7865.0], [99.7, 15385.0], [99.8, 15395.0], [99.9, 15486.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
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
        data: {"result": {"minY": 1.0, "minX": 0.0, "maxY": 639.0, "series": [{"data": [[0.0, 24.0], [600.0, 4.0], [15300.0, 2.0], [15400.0, 1.0], [1000.0, 17.0], [1100.0, 9.0], [1200.0, 48.0], [1400.0, 8.0], [100.0, 146.0], [1600.0, 3.0], [1900.0, 1.0], [2000.0, 7.0], [2800.0, 3.0], [2700.0, 1.0], [3000.0, 21.0], [3100.0, 4.0], [200.0, 639.0], [3200.0, 13.0], [3400.0, 2.0], [3600.0, 5.0], [4000.0, 5.0], [4400.0, 1.0], [4700.0, 1.0], [4800.0, 1.0], [400.0, 5.0], [6400.0, 1.0], [7100.0, 10.0], [7000.0, 2.0], [7200.0, 6.0], [7300.0, 8.0], [7800.0, 1.0], [500.0, 1.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 15400.0, "title": "Response Time Distribution"}},
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
        data: {"result": {"minY": 87.0, "minX": 0.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 814.0, "series": [{"data": [[0.0, 814.0]], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [[1.0, 87.0]], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [[2.0, 99.0]], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 2.0, "title": "Synthetic Response Times Distribution"}},
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
        data: {"result": {"minY": 59.57200000000001, "minX": 1.60924776E12, "maxY": 59.57200000000001, "series": [{"data": [[1.60924776E12, 59.57200000000001]], "isOverall": false, "label": "Thread Group", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60924776E12, "title": "Active Threads Over Time"}},
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
        data: {"result": {"minY": 291.8, "minX": 1.0, "maxY": 15395.0, "series": [{"data": [[2.0, 15385.0], [3.0, 7755.5], [4.0, 3671.5], [5.0, 3598.0], [6.0, 3627.0], [7.0, 1489.0], [8.0, 944.125], [9.0, 1303.0], [10.0, 961.375], [11.0, 983.6666666666666], [12.0, 1114.0], [13.0, 1018.875], [14.0, 1007.625], [15.0, 928.3333333333334], [16.0, 949.0], [17.0, 813.7272727272726], [18.0, 968.2222222222222], [19.0, 960.7777777777778], [20.0, 829.4545454545455], [21.0, 521.8888888888889], [22.0, 492.4], [23.0, 491.8], [24.0, 524.0], [25.0, 902.5999999999999], [26.0, 668.8333333333333], [27.0, 537.0], [28.0, 994.2222222222222], [29.0, 491.0], [30.0, 563.625], [31.0, 492.4], [32.0, 492.6], [33.0, 489.7], [34.0, 597.3], [35.0, 525.0], [36.0, 390.29999999999995], [37.0, 595.5], [38.0, 418.4444444444445], [39.0, 395.1], [40.0, 534.8], [41.0, 1110.0], [42.0, 946.1818181818182], [43.0, 1013.1000000000001], [44.0, 525.0], [45.0, 291.8], [46.0, 596.4000000000001], [47.0, 716.4], [48.0, 302.0], [49.0, 453.0909090909091], [50.0, 415.3333333333333], [51.0, 310.20000000000005], [52.0, 436.75], [53.0, 562.1818181818182], [54.0, 636.6666666666667], [55.0, 592.0], [56.0, 312.125], [57.0, 836.2727272727273], [58.0, 1176.111111111111], [59.0, 297.55555555555554], [60.0, 592.9], [61.0, 493.5], [62.0, 675.8000000000001], [63.0, 476.7142857142857], [64.0, 568.2727272727273], [65.0, 420.44444444444446], [66.0, 1198.6363636363637], [67.0, 313.77777777777777], [68.0, 966.3000000000001], [69.0, 913.4], [70.0, 605.4000000000001], [71.0, 669.5555555555554], [72.0, 565.1818181818182], [73.0, 699.5], [74.0, 469.75], [75.0, 414.1], [76.0, 374.18181818181813], [77.0, 673.25], [78.0, 597.6], [79.0, 1085.181818181818], [80.0, 700.25], [81.0, 912.9000000000001], [82.0, 673.4], [83.0, 610.7], [84.0, 456.625], [85.0, 493.55555555555554], [86.0, 1127.3], [87.0, 653.9000000000001], [88.0, 878.3000000000002], [89.0, 973.8888888888889], [90.0, 813.7], [91.0, 796.7000000000002], [92.0, 1242.3], [93.0, 371.3], [94.0, 389.77777777777777], [95.0, 309.2], [96.0, 414.5555555555555], [97.0, 296.54545454545456], [98.0, 1340.2222222222222], [99.0, 416.55555555555554], [100.0, 375.9090909090909], [101.0, 366.22222222222223], [102.0, 484.2727272727273], [103.0, 320.33333333333337], [104.0, 636.7777777777778], [105.0, 310.4], [106.0, 704.2222222222222], [107.0, 431.00000000000006], [108.0, 315.22222222222223], [109.0, 402.4], [110.0, 946.3000000000001], [111.0, 448.1111111111111], [112.0, 2572.0], [1.0, 15395.0]], "isOverall": false, "label": "HTTP Request", "isController": false}, {"data": [[59.57200000000001, 722.3620000000003]], "isOverall": false, "label": "HTTP Request-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 112.0, "title": "Time VS Threads"}},
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
        data : {"result": {"minY": 2000.0, "minX": 1.60924776E12, "maxY": 20276.0, "series": [{"data": [[1.60924776E12, 20276.0]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.60924776E12, 2000.0]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60924776E12, "title": "Bytes Throughput Over Time"}},
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
        data: {"result": {"minY": 722.3620000000003, "minX": 1.60924776E12, "maxY": 722.3620000000003, "series": [{"data": [[1.60924776E12, 722.3620000000003]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60924776E12, "title": "Response Time Over Time"}},
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
        data: {"result": {"minY": 722.3210000000001, "minX": 1.60924776E12, "maxY": 722.3210000000001, "series": [{"data": [[1.60924776E12, 722.3210000000001]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60924776E12, "title": "Latencies Over Time"}},
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
        data: {"result": {"minY": 494.10600000000017, "minX": 1.60924776E12, "maxY": 494.10600000000017, "series": [{"data": [[1.60924776E12, 494.10600000000017]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60924776E12, "title": "Connect Time Over Time"}},
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
        data: {"result": {"minY": 16.0, "minX": 1.60924776E12, "maxY": 15486.0, "series": [{"data": [[1.60924776E12, 15486.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.60924776E12, 1436.8]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.60924776E12, 7314.93]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.60924776E12, 3244.8999999999996]], "isOverall": false, "label": "95th percentile", "isController": false}, {"data": [[1.60924776E12, 16.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.60924776E12, 208.0]], "isOverall": false, "label": "Median", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60924776E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
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
    data: {"result": {"minY": 119.0, "minX": 1.0, "maxY": 15486.0, "series": [{"data": [[8.0, 7184.5], [2.0, 11345.5], [1.0, 15486.0], [73.0, 119.0], [78.0, 1134.0], [20.0, 3059.5], [10.0, 7170.0], [89.0, 206.0], [90.0, 208.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 90.0, "title": "Response Time Vs Request"}},
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
    data: {"result": {"minY": 119.0, "minX": 1.0, "maxY": 15486.0, "series": [{"data": [[8.0, 7184.5], [2.0, 11345.5], [1.0, 15486.0], [73.0, 119.0], [78.0, 1134.0], [20.0, 3059.5], [10.0, 7170.0], [89.0, 206.0], [90.0, 208.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 90.0, "title": "Latencies Vs Request"}},
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
        data: {"result": {"minY": 16.666666666666668, "minX": 1.60924776E12, "maxY": 16.666666666666668, "series": [{"data": [[1.60924776E12, 16.666666666666668]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60924776E12, "title": "Hits Per Second"}},
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
        data: {"result": {"minY": 16.666666666666668, "minX": 1.60924776E12, "maxY": 16.666666666666668, "series": [{"data": [[1.60924776E12, 16.666666666666668]], "isOverall": false, "label": "200", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60924776E12, "title": "Codes Per Second"}},
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
        data: {"result": {"minY": 16.666666666666668, "minX": 1.60924776E12, "maxY": 16.666666666666668, "series": [{"data": [[1.60924776E12, 16.666666666666668]], "isOverall": false, "label": "HTTP Request-success", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60924776E12, "title": "Transactions Per Second"}},
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
        data: {"result": {"minY": 16.666666666666668, "minX": 1.60924776E12, "maxY": 16.666666666666668, "series": [{"data": [[1.60924776E12, 16.666666666666668]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60924776E12, "title": "Total Transactions Per Second"}},
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

