---
layout: dynatable
title: jQuery Dynatable Plugin
heading: Dyna<span>table</span>
tagline: HTML5+JSON interactive table plugin.
description: Dynatable is a funner, semantic, interactive table plugin
  using jQuery, HTML5, and JSON. And it's not just for tables.
download:
  title: Download
  href: http://jspkg.com/packages/dynatable
  data: dynatable
  type: jspkg
github:
  title: View Source
  href: https://github.com/JangoSteve/jquery-dynatable
links:
  - title: Report bug or request feature
    href: https://github.com/JangoSteve/jquery-dynatable/issues
javascripts:
  - jquery.dynatable.js
  - highcharts.js
stylesheets:
  - jquery.dynatable.css
---

<h2 class="first-heading">Demo</h2>

<div class="dynatable-demo">

<table id="example-table" class="wikitable sortable table table-bordered" style="margin-left:auto;margin-right:auto;text-align: right">
<thead>
<tr>
<th>Rank</th>
<th>Country</th>
<th>US $</th>
<th>Year</th>
</tr>
</thead>
<tr>
<td>1</td>
<td align="left"><span class="flagicon"><img alt="" src="/images/flag_icons/22px-Flag_of_Luxembourg.svg.png" width="22" height="13" class="thumbborder" />&#160;</span><a target="_blank" href="http://en.wikipedia.org/wiki/Luxembourg" title="Luxembourg">Luxembourg</a></td>
<td>113,533</td>
<td>2011</td>
</tr>
<tr>
<td>2</td>
<td align="left"><span class="flagicon"><img alt="" src="/images/flag_icons/22px-Flag_of_Qatar.svg.png" width="22" height="9" class="thumbborder" />&#160;</span><a target="_blank" href="http://en.wikipedia.org/wiki/Qatar" title="Qatar">Qatar</a></td>
<td>98,329</td>
<td>2011</td>
</tr>
<tr>
<td>3</td>
<td align="left"><span class="flagicon"><img alt="" src="/images/flag_icons/22px-Flag_of_Norway.svg.png" width="22" height="16" class="thumbborder" />&#160;</span><a target="_blank" href="http://en.wikipedia.org/wiki/Norway" title="Norway">Norway</a></td>
<td>97,255</td>
<td>2011</td>
</tr>
<tr>
<td>4</td>
<td align="left"><span class="flagicon"><img alt="" src="/images/flag_icons/20px-Flag_of_Switzerland.svg.png" width="20" height="20" class="thumbborder" />&#160;</span><a target="_blank" href="http://en.wikipedia.org/wiki/Switzerland" title="Switzerland">Switzerland</a></td>
<td>81,161</td>
<td>2011</td>
</tr>
<tr>
<td>5</td>
<td align="left"><span class="flagicon"><img alt="" src="/images/flag_icons/22px-Flag_of_the_United_Arab_Emirates.svg.png" width="22" height="11" class="thumbborder" />&#160;</span><a target="_blank" href="http://en.wikipedia.org/wiki/United_Arab_Emirates" title="United Arab Emirates">United Arab Emirates</a></td>
<td>67,008</td>
<td>2011</td>
</tr>
<tr>
<td>6</td>
<td align="left"><span class="flagicon"><img alt="" src="//upload.wikimedia.org/wikipedia/en/thumb/b/b9/Flag_of_Australia.svg/22px-Flag_of_Australia.svg.png" width="22" height="11" class="thumbborder" />&#160;</span><a target="_blank" href="http://en.wikipedia.org/wiki/Australia" title="Australia">Australia</a></td>
<td>65,477</td>
<td>2011</td>
</tr>
<tr>
<td>7</td>
<td align="left"><span class="flagicon"><img alt="" src="/images/flag_icons/22px-Flag_of_Denmark.svg.png" width="22" height="17" class="thumbborder" />&#160;</span><a target="_blank" href="http://en.wikipedia.org/wiki/Denmark" title="Denmark">Denmark</a></td>
<td>59,928</td>
<td>2011</td>
</tr>
<tr>
<td>8</td>
<td align="left"><span class="flagicon"><img alt="" src="//upload.wikimedia.org/wikipedia/en/thumb/4/4c/Flag_of_Sweden.svg/22px-Flag_of_Sweden.svg.png" width="22" height="14" class="thumbborder" />&#160;</span><a target="_blank" href="http://en.wikipedia.org/wiki/Sweden" title="Sweden">Sweden</a></td>
<td>56,956</td>
<td>2011</td>
</tr>
<tr>
<td>9</td>
<td align="left"><span class="flagicon"><img alt="" src="//upload.wikimedia.org/wikipedia/en/thumb/c/cf/Flag_of_Canada.svg/22px-Flag_of_Canada.svg.png" width="22" height="11" class="thumbborder" />&#160;</span><a target="_blank" href="http://en.wikipedia.org/wiki/Canada" title="Canada">Canada</a></td>
<td>50,436</td>
<td>2011</td>
</tr>
<tr>
<td>10</td>
<td align="left"><span class="flagicon"><img alt="" src="/images/flag_icons/22px-Flag_of_the_Netherlands.svg.png" width="22" height="15" class="thumbborder" />&#160;</span><a target="_blank" href="http://en.wikipedia.org/wiki/Netherlands" title="Netherlands">Netherlands</a></td>
<td>50,355</td>
<td>2011</td>
</tr>
<tr>
<td>11</td>
<td align="left"><span class="flagicon"><img alt="" src="/images/flag_icons/22px-Flag_of_Austria.svg.png" width="22" height="15" class="thumbborder" />&#160;</span><a target="_blank" href="http://en.wikipedia.org/wiki/Austria" title="Austria">Austria</a></td>
<td>49,809</td>
<td>2011</td>
</tr>
<tr>
<td>12</td>
<td align="left"><span class="flagicon"><img alt="" src="/images/flag_icons/22px-Flag_of_Finland.svg.png" width="22" height="13" class="thumbborder" />&#160;</span><a target="_blank" href="http://en.wikipedia.org/wiki/Finland" title="Finland">Finland</a></td>
<td>49,350</td>
<td>2011</td>
</tr>
<tr>
<td>13</td>
<td align="left"><span class="flagicon"><img alt="" src="/images/flag_icons/22px-Flag_of_Singapore.svg.png" width="22" height="15" class="thumbborder" />&#160;</span><a target="_blank" href="http://en.wikipedia.org/wiki/Singapore" title="Singapore">Singapore</a></td>
<td>49,271</td>
<td>2011</td>
</tr>
<tr>
<td>14</td>
<td align="left"><span class="flagicon"><img alt="" src="//upload.wikimedia.org/wikipedia/en/thumb/a/a4/Flag_of_the_United_States.svg/22px-Flag_of_the_United_States.svg.png" width="22" height="12" class="thumbborder" />&#160;</span><a target="_blank" href="http://en.wikipedia.org/wiki/United_States" title="United States">United States</a></td>
<td>48,387</td>
<td>2011</td>
</tr>
<tr>
<td>15</td>
<td align="left"><span class="flagicon"><img alt="" src="/images/flag_icons/22px-Flag_of_Kuwait.svg.png" width="22" height="11" class="thumbborder" />&#160;</span><a target="_blank" href="http://en.wikipedia.org/wiki/Kuwait" title="Kuwait">Kuwait</a></td>
<td>47,982</td>
<td>2011</td>
</tr>
<tr>
<td>16</td>
<td align="left"><span class="flagicon"><img alt="" src="/images/flag_icons/22px-Flag_of_Ireland.svg.png" width="22" height="11" class="thumbborder" />&#160;</span><a target="_blank" href="http://en.wikipedia.org/wiki/Republic_of_Ireland" title="Republic of Ireland">Ireland</a></td>
<td>47,513</td>
<td>2011</td>
</tr>
<tr>
<td>17</td>
<td align="left"><span class="flagicon"><img alt="" src="/images/flag_icons/22px-Flag_of_Belgium_%28civil%29.svg.png" width="22" height="15" class="thumbborder" />&#160;</span><a target="_blank" href="http://en.wikipedia.org/wiki/Belgium" title="Belgium">Belgium</a></td>
<td>46,878</td>
<td>2011</td>
</tr>
<tr>
<td>18</td>
<td align="left"><span class="flagicon"><img alt="" src="//upload.wikimedia.org/wikipedia/en/thumb/9/9e/Flag_of_Japan.svg/22px-Flag_of_Japan.svg.png" width="22" height="15" class="thumbborder" />&#160;</span><a target="_blank" href="http://en.wikipedia.org/wiki/Japan" title="Japan">Japan</a></td>
<td>45,920</td>
<td>2011</td>
</tr>
<tr>
<td>19</td>
<td align="left"><span class="flagicon"><img alt="" src="//upload.wikimedia.org/wikipedia/en/thumb/c/c3/Flag_of_France.svg/22px-Flag_of_France.svg.png" width="22" height="15" class="thumbborder" />&#160;</span><a target="_blank" href="http://en.wikipedia.org/wiki/France" title="France">France</a></td>
<td>44,008</td>
<td>2011</td>
</tr>
<tr>
<td>20</td>
<td align="left"><span class="flagicon"><img alt="" src="//upload.wikimedia.org/wikipedia/en/thumb/b/ba/Flag_of_Germany.svg/22px-Flag_of_Germany.svg.png" width="22" height="13" class="thumbborder" />&#160;</span><a target="_blank" href="http://en.wikipedia.org/wiki/Germany" title="Germany">Germany</a></td>
<td>43,742</td>
<td>2011</td>
</tr>
<tr>
<td>21</td>
<td align="left"><span class="flagicon"><img alt="" src="/images/flag_icons/22px-Flag_of_Iceland.svg.png" width="22" height="16" class="thumbborder" />&#160;</span><a target="_blank" href="http://en.wikipedia.org/wiki/Iceland" title="Iceland">Iceland</a></td>
<td>43,088</td>
<td>2011</td>
</tr>
<tr>
<td>22</td>
<td align="left"><span class="flagicon"><img alt="" src="//upload.wikimedia.org/wikipedia/en/thumb/a/ae/Flag_of_the_United_Kingdom.svg/22px-Flag_of_the_United_Kingdom.svg.png" width="22" height="11" class="thumbborder" />&#160;</span><a target="_blank" href="http://en.wikipedia.org/wiki/United_Kingdom" title="United Kingdom">United Kingdom</a></td>
<td>38,592</td>
<td>2011</td>
</tr>
<tr>
<td>23</td>
<td align="left"><span class="flagicon"><img alt="" src="/images/flag_icons/22px-Flag_of_New_Zealand.svg.png" width="22" height="11" class="thumbborder" />&#160;</span><a target="_blank" href="http://en.wikipedia.org/wiki/New_Zealand" title="New Zealand">New Zealand</a></td>
<td>36,648</td>
<td>2011</td>
</tr>
<tr>
<td>24</td>
<td align="left"><span class="flagicon"><img alt="" src="/images/flag_icons/22px-Flag_of_Brunei.svg.png" width="22" height="11" class="thumbborder" />&#160;</span><a target="_blank" href="http://en.wikipedia.org/wiki/Brunei" title="Brunei">Brunei</a></td>
<td>36,584</td>
<td>2011</td>
</tr>
<tr>
<td>25</td>
<td align="left"><span class="flagicon"><img alt="" src="//upload.wikimedia.org/wikipedia/en/thumb/0/03/Flag_of_Italy.svg/22px-Flag_of_Italy.svg.png" width="22" height="15" class="thumbborder" />&#160;</span><a target="_blank" href="http://en.wikipedia.org/wiki/Italy" title="Italy">Italy</a></td>
<td>36,267</td>
<td>2011</td>
</tr>
<tr>
<td>-</td>
<td align="left"><i><span class="flagicon"><img alt="" src="/images/flag_icons/22px-Flag_of_Europe.svg.png" width="22" height="15" class="thumbborder" />&#160;</span><a target="_blank" href="http://en.wikipedia.org/wiki/European_Union" title="European Union">European Union</a></i></td>
<td>35,116</td>
<td>2011</td>
</tr>
<tr>
<td>-</td>
<td align="left"><i><span class="flagicon"><img alt="" src="/images/flag_icons/22px-Flag_of_Hong_Kong.svg.png" width="22" height="15" class="thumbborder" />&#160;</span><a target="_blank" href="http://en.wikipedia.org/wiki/Hong_Kong" title="Hong Kong">Hong Kong</a></i></td>
<td>34,049</td>
<td>2011</td>
</tr>
<tr>
<td>26</td>
<td align="left"><span class="flagicon"><img alt="" src="//upload.wikimedia.org/wikipedia/en/thumb/9/9a/Flag_of_Spain.svg/22px-Flag_of_Spain.svg.png" width="22" height="15" class="thumbborder" />&#160;</span><a target="_blank" href="http://en.wikipedia.org/wiki/Spain" title="Spain">Spain</a></td>
<td>32,360</td>
<td>2011</td>
</tr>
<tr>
<td>27</td>
<td align="left"><span class="flagicon"><img alt="" src="/images/flag_icons/22px-Flag_of_Israel.svg.png" width="22" height="16" class="thumbborder" />&#160;</span><a target="_blank" href="http://en.wikipedia.org/wiki/Israel" title="Israel">Israel</a></td>
<td>31,986</td>
<td>2011</td>
</tr>
<tr>
<td>28</td>
<td align="left"><span class="flagicon"><img alt="" src="/images/flag_icons/22px-Flag_of_Cyprus.svg.png" width="22" height="13" class="thumbborder" />&#160;</span><a target="_blank" href="http://en.wikipedia.org/wiki/Cyprus" title="Cyprus">Cyprus</a></td>
<td>30,571</td>
<td>2011</td>
</tr>
<tr>
<td>29</td>
<td align="left"><span class="flagicon"><img alt="" src="/images/flag_icons/22px-Flag_of_Greece.svg.png" width="22" height="15" class="thumbborder" />&#160;</span><a target="_blank" href="http://en.wikipedia.org/wiki/Greece" title="Greece">Greece</a></td>
<td>27,073</td>
<td>2011</td>
</tr>
<tr>
<td>30</td>
<td align="left"><span class="flagicon"><img alt="" src="/images/flag_icons/22px-Flag_of_Slovenia.svg.png" width="22" height="11" class="thumbborder" />&#160;</span><a target="_blank" href="http://en.wikipedia.org/wiki/Slovenia" title="Slovenia">Slovenia</a></td>
<td>24,533</td>
<td>2011</td>
</tr>
<tr>
<td>31</td>
<td align="left"><span class="flagicon"><img alt="" src="/images/flag_icons/22px-Flag_of_Oman.svg.png" width="22" height="11" class="thumbborder" />&#160;</span><a target="_blank" href="http://en.wikipedia.org/wiki/Oman" title="Oman">Oman</a></td>
<td>23,315</td>
<td>2011</td>
</tr>
<tr>
<td>32</td>
<td align="left"><span class="flagicon"><img alt="" src="/images/flag_icons/22px-Flag_of_the_Bahamas.svg.png" width="22" height="11" class="thumbborder" />&#160;</span><a target="_blank" href="http://en.wikipedia.org/wiki/The_Bahamas" title="The Bahamas">Bahamas, The</a></td>
<td>23,175</td>
<td>2011</td>
</tr>
<tr>
<td>33</td>
<td align="left"><span class="flagicon"><img alt="" src="/images/flag_icons/22px-Flag_of_Bahrain.svg.png" width="22" height="13" class="thumbborder" />&#160;</span><a target="_blank" href="http://en.wikipedia.org/wiki/Bahrain" title="Bahrain">Bahrain</a></td>
<td>23,132</td>
<td>2011</td>
</tr>
<tr>
<td>34</td>
<td align="left"><span class="flagicon"><img alt="" src="/images/flag_icons/22px-Flag_of_South_Korea.svg.png" width="22" height="15" class="thumbborder" />&#160;</span><a target="_blank" href="http://en.wikipedia.org/wiki/South_Korea" title="South Korea">Korea, South</a></td>
<td>22,778</td>
<td>2011</td>
</tr>
<tr>
<td>35</td>
<td align="left"><span class="flagicon"><img alt="" src="/images/flag_icons/22px-Flag_of_Portugal.svg.png" width="22" height="15" class="thumbborder" />&#160;</span><a target="_blank" href="http://en.wikipedia.org/wiki/Portugal" title="Portugal">Portugal</a></td>
<td>22,413</td>
<td>2011</td>
</tr>
<tr>
<td>36</td>
<td align="left"><span class="flagicon"><img alt="" src="/images/flag_icons/22px-Flag_of_Malta.svg.png" width="22" height="15" class="thumbborder" />&#160;</span><a target="_blank" href="http://en.wikipedia.org/wiki/Malta" title="Malta">Malta</a></td>
<td>21,028</td>
<td>2011</td>
</tr>
<tr>
<td>37</td>
<td align="left"><span class="flagicon"><img alt="" src="/images/flag_icons/22px-Flag_of_Saudi_Arabia.svg.png" width="22" height="15" class="thumbborder" />&#160;</span><a target="_blank" href="http://en.wikipedia.org/wiki/Saudi_Arabia" title="Saudi Arabia">Saudi Arabia</a></td>
<td>20,504</td>
<td>2011</td>
</tr>
<tr>
<td>38</td>
<td align="left"><span class="flagicon"><img alt="" src="/images/flag_icons/22px-Flag_of_the_Czech_Republic.svg.png" width="22" height="15" class="thumbborder" />&#160;</span><a target="_blank" href="http://en.wikipedia.org/wiki/Czech_Republic" title="Czech Republic">Czech Republic</a></td>
<td>20,444</td>
<td>2011</td>
</tr>
<tr>
<td>39</td>
<td align="left"><span class="flagicon"><img alt="" src="/images/flag_icons/22px-Flag_of_the_Republic_of_China.svg.png" width="22" height="15" class="thumbborder" />&#160;</span><a target="_blank" href="http://en.wikipedia.org/wiki/Taiwan" title="Taiwan">Taiwan</a></td>
<td>20,101</td>
<td>2011</td>
</tr>
<tr>
<td>40</td>
<td align="left"><span class="flagicon"><img alt="" src="/images/flag_icons/22px-Flag_of_Slovakia.svg.png" width="22" height="15" class="thumbborder" />&#160;</span><a target="_blank" href="http://en.wikipedia.org/wiki/Slovakia" title="Slovakia">Slovakia</a></td>
<td>17,644</td>
<td>2011</td>
</tr>
<tr>
<td>41</td>
<td align="left"><span class="flagicon"><img alt="" src="/images/flag_icons/22px-Flag_of_Trinidad_and_Tobago.svg.png" width="22" height="13" class="thumbborder" />&#160;</span><a target="_blank" href="http://en.wikipedia.org/wiki/Trinidad_and_Tobago" title="Trinidad and Tobago">Trinidad and Tobago</a></td>
<td>17,158</td>
<td>2011</td>
</tr>
<tr>
<td>42</td>
<td align="left"><span class="flagicon"><img alt="" src="/images/flag_icons/22px-Flag_of_Estonia.svg.png" width="22" height="14" class="thumbborder" />&#160;</span><a target="_blank" href="http://en.wikipedia.org/wiki/Estonia" title="Estonia">Estonia</a></td>
<td>16,583</td>
<td>2011</td>
</tr>
<tr>
<td>43</td>
<td align="left"><span class="flagicon"><img alt="" src="/images/flag_icons/22px-Flag_of_Barbados.svg.png" width="22" height="15" class="thumbborder" />&#160;</span><a target="_blank" href="http://en.wikipedia.org/wiki/Barbados" title="Barbados">Barbados</a></td>
<td>16,148</td>
<td>2011</td>
</tr>
<tr>
<td>44</td>
<td align="left"><span class="flagicon"><img alt="" src="/images/flag_icons/22px-Flag_of_Equatorial_Guinea.svg.png" width="22" height="15" class="thumbborder" />&#160;</span><a target="_blank" href="http://en.wikipedia.org/wiki/Equatorial_Guinea" title="Equatorial Guinea">Equatorial Guinea</a><sup id="cite_ref-6" class="reference"><a href="#cite_note-6"><span>[</span>7<span>]</span></a></sup></td>
<td>14,661</td>
<td>2011</td>
</tr>
<tr>
<td>45</td>
<td align="left"><span class="flagicon"><img alt="" src="/images/flag_icons/22px-Flag_of_Croatia.svg.png" width="22" height="11" class="thumbborder" />&#160;</span><a target="_blank" href="http://en.wikipedia.org/wiki/Croatia" title="Croatia">Croatia</a></td>
<td>14,457</td>
<td>2011</td>
</tr>
<tr>
<td>46</td>
<td align="left"><span class="flagicon"><img alt="" src="/images/flag_icons/22px-Flag_of_Chile.svg.png" width="22" height="15" class="thumbborder" />&#160;</span><a target="_blank" href="http://en.wikipedia.org/wiki/Chile" title="Chile">Chile</a></td>
<td>14,278</td>
<td>2011</td>
</tr>
<tr>
<td>47</td>
<td align="left"><span class="flagicon"><img alt="" src="/images/flag_icons/22px-Flag_of_Hungary.svg.png" width="22" height="11" class="thumbborder" />&#160;</span><a target="_blank" href="http://en.wikipedia.org/wiki/Hungary" title="Hungary">Hungary</a></td>
<td>14,050</td>
<td>2011</td>
</tr>
<tr>
<td>48</td>
<td align="left"><span class="flagicon"><img alt="" src="/images/flag_icons/22px-Flag_of_Uruguay.svg.png" width="22" height="15" class="thumbborder" />&#160;</span><a target="_blank" href="http://en.wikipedia.org/wiki/Uruguay" title="Uruguay">Uruguay</a></td>
<td>13,914</td>
<td>2011</td>
</tr>
<tr>
<td>49</td>
<td align="left"><span class="flagicon"><img alt="" src="/images/flag_icons/22px-Flag_of_Antigua_and_Barbuda.svg.png" width="22" height="15" class="thumbborder" />&#160;</span><a target="_blank" href="http://en.wikipedia.org/wiki/Antigua_and_Barbuda" title="Antigua and Barbuda">Antigua and Barbuda</a></td>
<td>13,552</td>
<td>2011</td>
</tr>
<tr>
<td>50</td>
<td align="left"><span class="flagicon"><img alt="" src="//upload.wikimedia.org/wikipedia/en/thumb/1/12/Flag_of_Poland.svg/22px-Flag_of_Poland.svg.png" width="22" height="14" class="thumbborder" />&#160;</span><a target="_blank" href="http://en.wikipedia.org/wiki/Poland" title="Poland">Poland</a></td>
<td>13,540</td>
<td>2011</td>
</tr>
<tr>
<td>51</td>
<td align="left"><span class="flagicon"><img alt="" src="/images/flag_icons/22px-Flag_of_Lithuania.svg.png" width="22" height="13" class="thumbborder" />&#160;</span><a target="_blank" href="http://en.wikipedia.org/wiki/Lithuania" title="Lithuania">Lithuania</a></td>
<td>13,075</td>
<td>2011</td>
</tr>
<tr>
<td>52</td>
<td align="left"><span class="flagicon"><img alt="" src="//upload.wikimedia.org/wikipedia/en/thumb/f/f3/Flag_of_Russia.svg/22px-Flag_of_Russia.svg.png" width="22" height="15" class="thumbborder" />&#160;</span><a target="_blank" href="http://en.wikipedia.org/wiki/Russia" title="Russia">Russia</a></td>
<td>12,993</td>
<td>2011</td>
</tr>
<tr>
<td>53</td>
<td align="left"><span class="flagicon"><img alt="" src="//upload.wikimedia.org/wikipedia/en/thumb/0/05/Flag_of_Brazil.svg/22px-Flag_of_Brazil.svg.png" width="22" height="15" class="thumbborder" />&#160;</span><a target="_blank" href="http://en.wikipedia.org/wiki/Brazil" title="Brazil">Brazil</a></td>
<td>12,789</td>
<td>2011</td>
</tr>
<tr>
<td>54</td>
<td align="left"><span class="flagicon"><img alt="" src="/images/flag_icons/22px-Flag_of_Saint_Kitts_and_Nevis.svg.png" width="22" height="15" class="thumbborder" />&#160;</span><a target="_blank" href="http://en.wikipedia.org/wiki/Saint_Kitts_and_Nevis" title="Saint Kitts and Nevis">Saint Kitts and Nevis</a></td>
<td>12,728</td>
<td>2011</td>
</tr>
<tr>
<td>55</td>
<td align="left"><span class="flagicon"><img alt="" src="/images/flag_icons/22px-Flag_of_Latvia.svg.png" width="22" height="11" class="thumbborder" />&#160;</span><a target="_blank" href="http://en.wikipedia.org/wiki/Latvia" title="Latvia">Latvia</a></td>
<td>12,671</td>
<td>2011</td>
</tr>
<tr>
<td>56</td>
<td align="left"><span class="flagicon"><img alt="" src="/images/flag_icons/22px-Flag_of_Seychelles.svg.png" width="22" height="11" class="thumbborder" />&#160;</span><a target="_blank" href="http://en.wikipedia.org/wiki/Seychelles" title="Seychelles">Seychelles</a></td>
<td>11,170</td>
<td>2011</td>
</tr>
<tr>
<td>57</td>
<td align="left"><span class="flagicon"><img alt="" src="/images/flag_icons/22px-Flag_of_Argentina.svg.png" width="22" height="14" class="thumbborder" />&#160;</span><a target="_blank" href="http://en.wikipedia.org/wiki/Argentina" title="Argentina">Argentina</a></td>
<td>10,945</td>
<td>2011</td>
</tr>
<tr>
<td>58</td>
<td align="left"><span class="flagicon"><img alt="" src="/images/flag_icons/22px-Flag_of_Kazakhstan.svg.png" width="22" height="11" class="thumbborder" />&#160;</span><a target="_blank" href="http://en.wikipedia.org/wiki/Kazakhstan" title="Kazakhstan">Kazakhstan</a></td>
<td>10,694</td>
<td>2011</td>
</tr>
<tr>
<td>59</td>
<td align="left"><span class="flagicon"><img alt="" src="/images/flag_icons/22px-Flag_of_Gabon.svg.png" width="22" height="17" class="thumbborder" />&#160;</span><a target="_blank" href="http://en.wikipedia.org/wiki/Gabon" title="Gabon">Gabon</a></td>
<td>10,654</td>
<td>2011</td>
</tr>
<tr>
<td>60</td>
<td align="left"><span class="flagicon"><img alt="" src="/images/flag_icons/22px-Flag_of_Venezuela.svg.png" width="22" height="15" class="thumbborder" />&#160;</span><a target="_blank" href="http://en.wikipedia.org/wiki/Venezuela" title="Venezuela">Venezuela</a></td>
<td>10,610</td>
<td>2011</td>
</tr>
<tr>
<td>61</td>
<td align="left"><span class="flagicon"><img alt="" src="/images/flag_icons/22px-Flag_of_Turkey.svg.png" width="22" height="15" class="thumbborder" />&#160;</span><a target="_blank" href="http://en.wikipedia.org/wiki/Turkey" title="Turkey">Turkey</a></td>
<td>10,522</td>
<td>2011</td>
</tr>
<tr>
<td>62</td>
<td align="left"><span class="flagicon"><img alt="" src="/images/flag_icons/22px-Flag_of_Mexico.svg.png" width="22" height="13" class="thumbborder" />&#160;</span><a target="_blank" href="http://en.wikipedia.org/wiki/Mexico" title="Mexico">Mexico</a></td>
<td>10,153</td>
<td>2011</td>
</tr>
<tr>
<td>-</td>
<td align="left"><span class="flagicon" style="padding-left:24px;">&#160;</span><i><a target="_blank" href="http://en.wikipedia.org/wiki/World" title="World">World</a></i><sup id="cite_ref-7" class="reference"><a href="#cite_note-7"><span>[</span>8<span>]</span></a></sup></td>
<td>10,144</td>
<td>2011</td>
</tr>
<tr>
<td>63</td>
<td align="left"><span class="flagicon"><img alt="" src="/images/flag_icons/22px-Flag_of_Lebanon.svg.png" width="22" height="15" class="thumbborder" />&#160;</span><a target="_blank" href="http://en.wikipedia.org/wiki/Lebanon" title="Lebanon">Lebanon</a></td>
<td>9,862</td>
<td>2011</td>
</tr>
<tr>
<td>64</td>
<td align="left"><span class="flagicon"><img alt="" src="/images/flag_icons/22px-Flag_of_Malaysia.svg.png" width="22" height="11" class="thumbborder" />&#160;</span><a target="_blank" href="http://en.wikipedia.org/wiki/Malaysia" title="Malaysia">Malaysia</a></td>
<td>9,700</td>
<td>2011</td>
</tr>
<tr>
<td>65</td>
<td align="left"><span class="flagicon"><img alt="" src="/images/flag_icons/22px-Flag_of_Botswana.svg.png" width="22" height="15" class="thumbborder" />&#160;</span><a target="_blank" href="http://en.wikipedia.org/wiki/Botswana" title="Botswana">Botswana</a></td>
<td>9,481</td>
<td>2011</td>
</tr>
<tr>
<td>66</td>
<td align="left"><span class="flagicon"><img alt="" src="/images/flag_icons/22px-Flag_of_Costa_Rica.svg.png" width="22" height="13" class="thumbborder" />&#160;</span><a target="_blank" href="http://en.wikipedia.org/wiki/Costa_Rica" title="Costa Rica">Costa Rica</a></td>
<td>8,877</td>
<td>2011</td>
</tr>
<tr>
<td>67</td>
<td align="left"><span class="flagicon"><img alt="" src="/images/flag_icons/22px-Flag_of_Romania.svg.png" width="22" height="15" class="thumbborder" />&#160;</span><a target="_blank" href="http://en.wikipedia.org/wiki/Romania" title="Romania">Romania</a></td>
<td>8,863</td>
<td>2011</td>
</tr>
<tr>
<td>68</td>
<td align="left"><span class="flagicon"><img alt="" src="/images/flag_icons/22px-Flag_of_Mauritius.svg.png" width="22" height="15" class="thumbborder" />&#160;</span><a target="_blank" href="http://en.wikipedia.org/wiki/Mauritius" title="Mauritius">Mauritius</a></td>
<td>8,777</td>
<td>2011</td>
</tr>
<tr>
<td>69</td>
<td align="left"><span class="flagicon"><img alt="" src="/images/flag_icons/22px-Flag_of_Panama.svg.png" width="22" height="15" class="thumbborder" />&#160;</span><a target="_blank" href="http://en.wikipedia.org/wiki/Panama" title="Panama">Panama</a></td>
<td>8,514</td>
<td>2011</td>
</tr>
<tr>
<td>70</td>
<td align="left"><span class="flagicon"><img alt="" src="/images/flag_icons/22px-Flag_of_South_Africa.svg.png" width="22" height="15" class="thumbborder" />&#160;</span><a target="_blank" href="http://en.wikipedia.org/wiki/South_Africa" title="South Africa">South Africa</a></td>
<td>8,066</td>
<td>2011</td>
</tr>
<tr>
<td>71</td>
<td align="left"><span class="flagicon"><img alt="" src="/images/flag_icons/22px-Flag_of_Grenada.svg.png" width="22" height="13" class="thumbborder" />&#160;</span><a target="_blank" href="http://en.wikipedia.org/wiki/Grenada" title="Grenada">Grenada</a></td>
<td>7,878</td>
<td>2011</td>
</tr>
<tr>
<td>72</td>
<td align="left"><span class="flagicon"><img alt="" src="/images/flag_icons/22px-Flag_of_Saint_Lucia.svg.png" width="22" height="11" class="thumbborder" />&#160;</span><a target="_blank" href="http://en.wikipedia.org/wiki/Saint_Lucia" title="Saint Lucia">Saint Lucia</a></td>
<td>7,435</td>
<td>2011</td>
</tr>
<tr>
<td>73</td>
<td align="left"><span class="flagicon"><img alt="" src="/images/flag_icons/22px-Flag_of_Montenegro.svg.png" width="22" height="11" class="thumbborder" />&#160;</span><a target="_blank" href="http://en.wikipedia.org/wiki/Montenegro" title="Montenegro">Montenegro</a></td>
<td>7,317</td>
<td>2011</td>
</tr>
<tr>
<td>74</td>
<td align="left"><span class="flagicon"><img alt="" src="/images/flag_icons/22px-Flag_of_Bulgaria.svg.png" width="22" height="13" class="thumbborder" />&#160;</span><a target="_blank" href="http://en.wikipedia.org/wiki/Bulgaria" title="Bulgaria">Bulgaria</a></td>
<td>7,202</td>
<td>2011</td>
</tr>
<tr>
<td>75</td>
<td align="left"><span class="flagicon"><img alt="" src="/images/flag_icons/22px-Flag_of_Colombia.svg.png" width="22" height="15" class="thumbborder" />&#160;</span><a target="_blank" href="http://en.wikipedia.org/wiki/Colombia" title="Colombia">Colombia</a></td>
<td>7,132</td>
<td>2011</td>
</tr>
<tr>
<td>76</td>
<td align="left"><span class="flagicon"><img alt="" src="/images/flag_icons/22px-Flag_of_Suriname.svg.png" width="22" height="15" class="thumbborder" />&#160;</span><a target="_blank" href="http://en.wikipedia.org/wiki/Suriname" title="Suriname">Suriname</a></td>
<td>7,096</td>
<td>2011</td>
</tr>
<tr>
<td>77</td>
<td align="left"><span class="flagicon"><img alt="" src="/images/flag_icons/22px-Flag_of_Dominica.svg.png" width="22" height="11" class="thumbborder" />&#160;</span><a target="_blank" href="http://en.wikipedia.org/wiki/Dominica" title="Dominica">Dominica</a></td>
<td>6,909</td>
<td>2011</td>
</tr>
<tr>
<td>78</td>
<td align="left"><span class="flagicon"><img alt="" src="/images/flag_icons/22px-Flag_of_Azerbaijan.svg.png" width="22" height="11" class="thumbborder" />&#160;</span><a target="_blank" href="http://en.wikipedia.org/wiki/Azerbaijan" title="Azerbaijan">Azerbaijan</a></td>
<td>6,832</td>
<td>2011</td>
</tr>
<tr>
<td>79</td>
<td align="left"><span class="flagicon"><img alt="" src="/images/flag_icons/22px-Flag_of_Iran.svg.png" width="22" height="13" class="thumbborder" />&#160;</span><a target="_blank" href="http://en.wikipedia.org/wiki/Iran" title="Iran">Iran</a></td>
<td>6,360</td>
<td>2011</td>
</tr>
<tr>
<td>80</td>
<td align="left"><span class="flagicon"><img alt="" src="/images/flag_icons/22px-Flag_of_Saint_Vincent_and_the_Grenadines.svg.png" width="22" height="15" class="thumbborder" />&#160;</span><a target="_blank" href="http://en.wikipedia.org/wiki/Saint_Vincent_and_the_Grenadines" title="Saint Vincent and the Grenadines">Saint Vincent and the Grenadines</a></td>
<td>6,342</td>
<td>2011</td>
</tr>
<tr>
<td>81</td>
<td align="left"><span class="flagicon"><img alt="" src="/images/flag_icons/22px-Flag_of_Serbia.svg.png" width="22" height="15" class="thumbborder" />&#160;</span><a target="_blank" href="http://en.wikipedia.org/wiki/Serbia" title="Serbia">Serbia</a></td>
<td>6,081</td>
<td>2011</td>
</tr>
<tr>
<td>82</td>
<td align="left"><span class="flagicon"><img alt="" src="/images/flag_icons/22px-Flag_of_Maldives.svg.png" width="22" height="15" class="thumbborder" />&#160;</span><a target="_blank" href="http://en.wikipedia.org/wiki/Maldives" title="Maldives">Maldives</a></td>
<td>5,973</td>
<td>2011</td>
</tr>
<tr>
<td>83</td>
<td align="left"><span class="flagicon"><img alt="" src="/images/flag_icons/22px-Flag_of_Belarus.svg.png" width="22" height="11" class="thumbborder" />&#160;</span><a target="_blank" href="http://en.wikipedia.org/wiki/Belarus" title="Belarus">Belarus</a></td>
<td>5,881</td>
<td>2011</td>
</tr>
<tr>
<td>84</td>
<td align="left"><span class="flagicon"><img alt="" src="/images/flag_icons/22px-Flag_of_Namibia.svg.png" width="22" height="15" class="thumbborder" />&#160;</span><a target="_blank" href="http://en.wikipedia.org/wiki/Namibia" title="Namibia">Namibia</a></td>
<td>5,828</td>
<td>2011</td>
</tr>
<tr>
<td>85</td>
<td align="left"><span class="flagicon"><img alt="" src="/images/flag_icons/22px-Flag_of_Peru.svg.png" width="22" height="15" class="thumbborder" />&#160;</span><a target="_blank" href="http://en.wikipedia.org/wiki/Peru" title="Peru">Peru</a></td>
<td>5,782</td>
<td>2011</td>
</tr>
<tr>
<td>86</td>
<td align="left"><span class="flagicon"><img alt="" src="/images/flag_icons/22px-Flag_of_Libya.svg.png" width="22" height="11" class="thumbborder" />&#160;</span><a target="_blank" href="http://en.wikipedia.org/wiki/Libya" title="Libya">Libya</a></td>
<td>5,691</td>
<td>2011</td>
</tr>
<tr>
<td>87</td>
<td align="left"><span class="flagicon"><img alt="" src="/images/flag_icons/22px-Flag_of_the_Dominican_Republic.svg.png" width="22" height="14" class="thumbborder" />&#160;</span><a target="_blank" href="http://en.wikipedia.org/wiki/Dominican_Republic" title="Dominican Republic">Dominican Republic</a></td>
<td>5,639</td>
<td>2011</td>
</tr>
<tr>
<td>88</td>
<td align="left"><span class="flagicon"><img alt="" src="/images/flag_icons/22px-Flag_of_the_People%27s_Republic_of_China.svg.png" width="22" height="15" class="thumbborder" />&#160;</span><a target="_blank" href="http://en.wikipedia.org/wiki/China" title="China">China</a></td>
<td>5,414</td>
<td>2011</td>
</tr>
<tr>
<td>89</td>
<td align="left"><span class="flagicon"><img alt="" src="/images/flag_icons/22px-Flag_of_Jamaica.svg.png" width="22" height="11" class="thumbborder" />&#160;</span><a target="_blank" href="http://en.wikipedia.org/wiki/Jamaica" title="Jamaica">Jamaica</a></td>
<td>5,402</td>
<td>2011</td>
</tr>
<tr>
<td>90</td>
<td align="left"><span class="flagicon"><img alt="" src="/images/flag_icons/22px-Flag_of_Thailand.svg.png" width="22" height="15" class="thumbborder" />&#160;</span><a target="_blank" href="http://en.wikipedia.org/wiki/Thailand" title="Thailand">Thailand</a></td>
<td>5,394</td>
<td>2011</td>
</tr>
<tr>
<td>91</td>
<td align="left"><span class="flagicon"><img alt="" src="/images/flag_icons/22px-Flag_of_Algeria.svg.png" width="22" height="15" class="thumbborder" />&#160;</span><a target="_blank" href="http://en.wikipedia.org/wiki/Algeria" title="Algeria">Algeria</a></td>
<td>5,304</td>
<td>2011</td>
</tr>
<tr>
<td>92</td>
<td align="left"><span class="flagicon"><img alt="" src="/images/flag_icons/22px-Flag_of_Angola.svg.png" width="22" height="15" class="thumbborder" />&#160;</span><a target="_blank" href="http://en.wikipedia.org/wiki/Angola" title="Angola">Angola</a></td>
<td>5,144</td>
<td>2011</td>
</tr>
<tr>
<td>93</td>
<td align="left"><span class="flagicon"><img alt="" src="/images/flag_icons/22px-Flag_of_Macedonia.svg.png" width="22" height="11" class="thumbborder" />&#160;</span><a target="_blank" href="http://en.wikipedia.org/wiki/Republic_of_Macedonia" title="Republic of Macedonia">Macedonia, Republic of</a></td>
<td>5,016</td>
<td>2011</td>
</tr>
<tr>
<td>94</td>
<td align="left"><span class="flagicon"><img alt="" src="/images/flag_icons/22px-Flag_of_Jordan.svg.png" width="22" height="11" class="thumbborder" />&#160;</span><a target="_blank" href="http://en.wikipedia.org/wiki/Jordan" title="Jordan">Jordan</a></td>
<td>4,675</td>
<td>2011</td>
</tr>
<tr>
<td>95</td>
<td align="left"><span class="flagicon"><img alt="" src="/images/flag_icons/22px-Flag_of_Turkmenistan.svg.png" width="22" height="15" class="thumbborder" />&#160;</span><a target="_blank" href="http://en.wikipedia.org/wiki/Turkmenistan" title="Turkmenistan">Turkmenistan</a></td>
<td>4,658</td>
<td>2011</td>
</tr>
<tr>
<td>96</td>
<td align="left"><span class="flagicon"><img alt="" src="/images/flag_icons/22px-Flag_of_Bosnia_and_Herzegovina.svg.png" width="22" height="11" class="thumbborder" />&#160;</span><a target="_blank" href="http://en.wikipedia.org/wiki/Bosnia_and_Herzegovina" title="Bosnia and Herzegovina">Bosnia and Herzegovina</a></td>
<td>4,618</td>
<td>2011</td>
</tr>
<tr>
<td>97</td>
<td align="left"><span class="flagicon"><img alt="" src="/images/flag_icons/22px-Flag_of_Ecuador.svg.png" width="22" height="15" class="thumbborder" />&#160;</span><a target="_blank" href="http://en.wikipedia.org/wiki/Ecuador" title="Ecuador">Ecuador</a></td>
<td>4,424</td>
<td>2011</td>
</tr>
<tr>
<td>98</td>
<td align="left"><span class="flagicon"><img alt="" src="/images/flag_icons/22px-Flag_of_Tunisia.svg.png" width="22" height="15" class="thumbborder" />&#160;</span><a target="_blank" href="http://en.wikipedia.org/wiki/Tunisia" title="Tunisia">Tunisia</a></td>
<td>4,351</td>
<td>2011</td>
</tr>
<tr>
<td>99</td>
<td align="left"><span class="flagicon"><img alt="" src="/images/flag_icons/22px-Flag_of_Belize.svg.png" width="22" height="15" class="thumbborder" />&#160;</span><a target="_blank" href="http://en.wikipedia.org/wiki/Belize" title="Belize">Belize</a></td>
<td>4,349</td>
<td>2011</td>
</tr>
<tr>
<td>100</td>
<td align="left"><span class="flagicon"><img alt="" src="/images/flag_icons/22px-Flag_of_Tonga.svg.png" width="22" height="11" class="thumbborder" />&#160;</span><a target="_blank" href="http://en.wikipedia.org/wiki/Tonga" title="Tonga">Tonga</a></td>
<td>4,221</td>
<td>2011</td>
</tr>
<tr>
<td>101</td>
<td align="left"><span class="flagicon"><img alt="" src="/images/flag_icons/22px-Flag_of_Albania.svg.png" width="22" height="16" class="thumbborder" />&#160;</span><a target="_blank" href="http://en.wikipedia.org/wiki/Albania" title="Albania">Albania</a></td>
<td>3,992</td>
<td>2011</td>
</tr>
<tr>
<td>102</td>
<td align="left"><span class="flagicon"><img alt="" src="/images/flag_icons/22px-Flag_of_Fiji.svg.png" width="22" height="11" class="thumbborder" />&#160;</span><a target="_blank" href="http://en.wikipedia.org/wiki/Fiji" title="Fiji">Fiji</a></td>
<td>3,965</td>
<td>2011</td>
</tr>
<tr>
<td>103</td>
<td align="left"><span class="flagicon"><img alt="" src="/images/flag_icons/22px-Flag_of_East_Timor.svg.png" width="22" height="11" class="thumbborder" />&#160;</span><a target="_blank" href="http://en.wikipedia.org/wiki/East_Timor" title="East Timor">East Timor</a></td>
<td>3,949</td>
<td>2011</td>
</tr>
<tr>
<td>104</td>
<td align="left"><span class="flagicon"><img alt="" src="/images/flag_icons/22px-Flag_of_El_Salvador.svg.png" width="22" height="12" class="thumbborder" />&#160;</span><a target="_blank" href="http://en.wikipedia.org/wiki/El_Salvador" title="El Salvador">El Salvador</a></td>
<td>3,855</td>
<td>2011</td>
</tr>
<tr>
<td>105</td>
<td align="left"><span class="flagicon"><img alt="" src="/images/flag_icons/22px-Flag_of_the_Republic_of_the_Congo.svg.png" width="22" height="15" class="thumbborder" />&#160;</span><a target="_blank" href="http://en.wikipedia.org/wiki/Republic_of_the_Congo" title="Republic of the Congo">Congo, Republic of the</a></td>
<td>3,714</td>
<td>2011</td>
</tr>
<tr>
<td>106</td>
<td align="left"><span class="flagicon"><img alt="" src="/images/flag_icons/22px-Flag_of_Cape_Verde.svg.png" width="22" height="13" class="thumbborder" />&#160;</span><a target="_blank" href="http://en.wikipedia.org/wiki/Cape_Verde" title="Cape Verde">Cape Verde</a></td>
<td>3,661</td>
<td>2011</td>
</tr>
<tr>
<td>107</td>
<td align="left"><span class="flagicon"><img alt="" src="/images/flag_icons/22px-Flag_of_Ukraine.svg.png" width="22" height="15" class="thumbborder" />&#160;</span><a target="_blank" href="http://en.wikipedia.org/wiki/Ukraine" title="Ukraine">Ukraine</a></td>
<td>3,621</td>
<td>2011</td>
</tr>
<tr>
<td>108</td>
<td align="left"><span class="flagicon"><img alt="" src="/images/flag_icons/22px-Flag_of_Kosovo.svg.png" width="22" height="16" class="thumbborder" />&#160;</span><a target="_blank" href="http://en.wikipedia.org/wiki/Republic_of_Kosovo" title="Republic of Kosovo">Kosovo</a><sup id="cite_ref-uscensuspop_8-0" class="reference"><a href="#cite_note-uscensuspop-8"><span>[</span>9<span>]</span></a></sup></td>
<td>3,534</td>
<td>2011</td>
</tr>
<tr>
<td>109</td>
<td align="left"><span class="flagicon"><img alt="" src="/images/flag_icons/22px-Flag_of_Iraq.svg.png" width="22" height="15" class="thumbborder" />&#160;</span><a target="_blank" href="http://en.wikipedia.org/wiki/Iraq" title="Iraq">Iraq</a></td>
<td>3,513</td>
<td>2011</td>
</tr>
<tr>
<td>110</td>
<td align="left"><span class="flagicon"><img alt="" src="/images/flag_icons/22px-Flag_of_Indonesia.svg.png" width="22" height="15" class="thumbborder" />&#160;</span><a target="_blank" href="http://en.wikipedia.org/wiki/Indonesia" title="Indonesia">Indonesia</a></td>
<td>3,509</td>
<td>2011</td>
</tr>
<tr>
<td>111</td>
<td align="left"><span class="flagicon"><img alt="" src="/images/flag_icons/22px-Flag_of_Samoa.svg.png" width="22" height="11" class="thumbborder" />&#160;</span><a target="_blank" href="http://en.wikipedia.org/wiki/Samoa" title="Samoa">Samoa</a></td>
<td>3,451</td>
<td>2011</td>
</tr>
<tr>
<td>112</td>
<td align="left"><span class="flagicon"><img alt="" src="/images/flag_icons/22px-Flag_of_Swaziland.svg.png" width="22" height="15" class="thumbborder" />&#160;</span><a target="_blank" href="http://en.wikipedia.org/wiki/Swaziland" title="Swaziland">Swaziland</a></td>
<td>3,358</td>
<td>2011</td>
</tr>
<tr>
<td>113</td>
<td align="left"><span class="flagicon"><img alt="" src="/images/flag_icons/22px-Flag_of_Tuvalu.svg.png" width="22" height="11" class="thumbborder" />&#160;</span><a target="_blank" href="http://en.wikipedia.org/wiki/Tuvalu" title="Tuvalu">Tuvalu</a><sup id="cite_ref-uscensuspop_8-1" class="reference"><a href="#cite_note-uscensuspop-8"><span>[</span>9<span>]</span></a></sup></td>
<td>3,319</td>
<td>2011</td>
</tr>
<tr>
<td>114</td>
<td align="left"><span class="flagicon"><img alt="" src="/images/flag_icons/22px-Flag_of_Paraguay.svg.png" width="22" height="13" class="thumbborder" />&#160;</span><a target="_blank" href="http://en.wikipedia.org/wiki/Paraguay" title="Paraguay">Paraguay</a></td>
<td>3,252</td>
<td>2011</td>
</tr>
<tr>
<td>115</td>
<td align="left"><span class="flagicon"><img alt="" src="/images/flag_icons/22px-Flag_of_Georgia.svg.png" width="22" height="15" class="thumbborder" />&#160;</span><a target="_blank" href="http://en.wikipedia.org/wiki/Georgia_(country)" title="Georgia (country)">Georgia</a></td>
<td>3,210</td>
<td>2011</td>
</tr>
<tr>
<td>116</td>
<td align="left"><span class="flagicon"><img alt="" src="/images/flag_icons/22px-Flag_of_Guyana.svg.png" width="22" height="13" class="thumbborder" />&#160;</span><a target="_blank" href="http://en.wikipedia.org/wiki/Guyana" title="Guyana">Guyana</a></td>
<td>3,202</td>
<td>2011</td>
</tr>
<tr>
<td>117</td>
<td align="left"><span class="flagicon"><img alt="" src="/images/flag_icons/22px-Flag_of_Guatemala.svg.png" width="22" height="14" class="thumbborder" />&#160;</span><a target="_blank" href="http://en.wikipedia.org/wiki/Guatemala" title="Guatemala">Guatemala</a></td>
<td>3,182</td>
<td>2011</td>
</tr>
<tr>
<td>118</td>
<td align="left"><span class="flagicon"><img alt="" src="/images/flag_icons/22px-Flag_of_Morocco.svg.png" width="22" height="15" class="thumbborder" />&#160;</span><a target="_blank" href="http://en.wikipedia.org/wiki/Morocco" title="Morocco">Morocco</a></td>
<td>3,083</td>
<td>2011</td>
</tr>
<tr>
<td>119</td>
<td align="left"><span class="flagicon"><img alt="" src="/images/flag_icons/22px-Flag_of_Mongolia.svg.png" width="22" height="11" class="thumbborder" />&#160;</span><a target="_blank" href="http://en.wikipedia.org/wiki/Mongolia" title="Mongolia">Mongolia</a></td>
<td>3,042</td>
<td>2011</td>
</tr>
<tr>
<td>120</td>
<td align="left"><span class="flagicon"><img alt="" src="/images/flag_icons/22px-Flag_of_Vanuatu.svg.png" width="22" height="13" class="thumbborder" />&#160;</span><a target="_blank" href="http://en.wikipedia.org/wiki/Vanuatu" title="Vanuatu">Vanuatu</a></td>
<td>3,036</td>
<td>2011</td>
</tr>
<tr>
<td>121</td>
<td align="left"><span class="flagicon"><img alt="" src="/images/flag_icons/22px-Flag_of_Armenia.svg.png" width="22" height="11" class="thumbborder" />&#160;</span><a target="_blank" href="http://en.wikipedia.org/wiki/Armenia" title="Armenia">Armenia</a></td>
<td>3,033</td>
<td>2011</td>
</tr>
<tr>
<td>122</td>
<td align="left"><span class="flagicon"><img alt="" src="/images/flag_icons/22px-Flag_of_Egypt.svg.png" width="22" height="15" class="thumbborder" />&#160;</span><a target="_blank" href="http://en.wikipedia.org/wiki/Egypt" title="Egypt">Egypt</a></td>
<td>2,970</td>
<td>2011</td>
</tr>
<tr>
<td>123</td>
<td align="left"><span class="flagicon"><img alt="" src="/images/flag_icons/22px-Flag_of_Sri_Lanka.svg.png" width="22" height="11" class="thumbborder" />&#160;</span><a target="_blank" href="http://en.wikipedia.org/wiki/Sri_Lanka" title="Sri Lanka">Sri Lanka</a></td>
<td>2,877</td>
<td>2011</td>
</tr>
<tr>
<td>124</td>
<td align="left"><span class="flagicon"><img alt="" src="/images/flag_icons/22px-Flag_of_Syria.svg.png" width="22" height="15" class="thumbborder" />&#160;</span><a target="_blank" href="http://en.wikipedia.org/wiki/Syria" title="Syria">Syria</a></td>
<td>2,803</td>
<td>2010</td>
</tr>
<tr>
<td>125</td>
<td align="left"><span class="flagicon"><img alt="" src="/images/flag_icons/22px-Flag_of_Bolivia.svg.png" width="22" height="15" class="thumbborder" />&#160;</span><a target="_blank" href="http://en.wikipedia.org/wiki/Bolivia" title="Bolivia">Bolivia</a></td>
<td>2,315</td>
<td>2011</td>
</tr>
<tr>
<td>126</td>
<td align="left"><span class="flagicon"><img alt="" src="/images/flag_icons/22px-Flag_of_the_Philippines.svg.png" width="22" height="11" class="thumbborder" />&#160;</span><a target="_blank" href="http://en.wikipedia.org/wiki/Philippines" title="Philippines">Philippines</a></td>
<td>2,223</td>
<td>2011</td>
</tr>
<tr>
<td>127</td>
<td align="left"><span class="flagicon"><img alt="" src="/images/flag_icons/22px-Flag_of_Bhutan.svg.png" width="22" height="15" class="thumbborder" />&#160;</span><a target="_blank" href="http://en.wikipedia.org/wiki/Bhutan" title="Bhutan">Bhutan</a></td>
<td>2,121</td>
<td>2011</td>
</tr>
<tr>
<td>128</td>
<td align="left"><span class="flagicon"><img alt="" src="/images/flag_icons/22px-Flag_of_Honduras.svg.png" width="22" height="11" class="thumbborder" />&#160;</span><a target="_blank" href="http://en.wikipedia.org/wiki/Honduras" title="Honduras">Honduras</a></td>
<td>2,116</td>
<td>2011</td>
</tr>
<tr>
<td>129</td>
<td align="left"><span class="flagicon"><img alt="" src="/images/flag_icons/22px-Flag_of_Sudan.svg.png" width="22" height="11" class="thumbborder" />&#160;</span><a target="_blank" href="http://en.wikipedia.org/wiki/Sudan" title="Sudan">Sudan</a></td>
<td>1,982</td>
<td>2011</td>
</tr>
<tr>
<td>130</td>
<td align="left"><span class="flagicon"><img alt="" src="/images/flag_icons/22px-Flag_of_Moldova.svg.png" width="22" height="11" class="thumbborder" />&#160;</span><a target="_blank" href="http://en.wikipedia.org/wiki/Moldova" title="Moldova">Moldova</a></td>
<td>1,969</td>
<td>2011</td>
</tr>
<tr>
<td>131</td>
<td align="left"><span class="flagicon"><img alt="" src="/images/flag_icons/22px-Flag_of_Papua_New_Guinea.svg.png" width="22" height="17" class="thumbborder" />&#160;</span><a target="_blank" href="http://en.wikipedia.org/wiki/Papua_New_Guinea" title="Papua New Guinea">Papua New Guinea</a></td>
<td>1,900</td>
<td>2011</td>
</tr>
<tr>
<td>132</td>
<td align="left"><span class="flagicon"><img alt="" src="/images/flag_icons/22px-Flag_of_Kiribati.svg.png" width="22" height="11" class="thumbborder" />&#160;</span><a target="_blank" href="http://en.wikipedia.org/wiki/Kiribati" title="Kiribati">Kiribati</a></td>
<td>1,593</td>
<td>2011</td>
</tr>
<tr>
<td>133</td>
<td align="left"><span class="flagicon"><img alt="" src="/images/flag_icons/22px-Flag_of_Uzbekistan.svg.png" width="22" height="11" class="thumbborder" />&#160;</span><a target="_blank" href="http://en.wikipedia.org/wiki/Uzbekistan" title="Uzbekistan">Uzbekistan</a></td>
<td>1,572</td>
<td>2011</td>
</tr>
<tr>
<td>134</td>
<td align="left"><span class="flagicon"><img alt="" src="/images/flag_icons/22px-Flag_of_the_Solomon_Islands.svg.png" width="22" height="11" class="thumbborder" />&#160;</span><a target="_blank" href="http://en.wikipedia.org/wiki/Solomon_Islands" title="Solomon Islands">Solomon Islands</a></td>
<td>1,554</td>
<td>2011</td>
</tr>
<tr>
<td>135</td>
<td align="left"><span class="flagicon"><img alt="" src="/images/flag_icons/22px-Flag_of_Ghana.svg.png" width="22" height="15" class="thumbborder" />&#160;</span><a target="_blank" href="http://en.wikipedia.org/wiki/Ghana" title="Ghana">Ghana</a></td>
<td>1,529</td>
<td>2011</td>
</tr>
<tr>
<td>136</td>
<td align="left"><span class="flagicon"><img alt="" src="/images/flag_icons/22px-Flag_of_Nigeria.svg.png" width="22" height="11" class="thumbborder" />&#160;</span><a target="_blank" href="http://en.wikipedia.org/wiki/Nigeria" title="Nigeria">Nigeria</a></td>
<td>1,490</td>
<td>2011</td>
</tr>
<tr>
<td>137</td>
<td align="left"><span class="flagicon"><img alt="" src="/images/flag_icons/22px-Flag_of_Sao_Tome_and_Principe.svg.png" width="22" height="11" class="thumbborder" />&#160;</span><a target="_blank" href="http://en.wikipedia.org/wiki/S%C3%A3o_Tom%C3%A9_and_Pr%C3%ADncipe" title="São Tomé and Príncipe">São Tomé and Príncipe</a></td>
<td>1,473</td>
<td>2011</td>
</tr>
<tr>
<td>138</td>
<td align="left"><span class="flagicon"><img alt="" src="/images/flag_icons/22px-Flag_of_Djibouti.svg.png" width="22" height="15" class="thumbborder" />&#160;</span><a target="_blank" href="http://en.wikipedia.org/wiki/Djibouti" title="Djibouti">Djibouti</a></td>
<td>1,467</td>
<td>2011</td>
</tr>
<tr>
<td>139</td>
<td align="left"><span class="flagicon"><img alt="" src="/images/flag_icons/22px-Flag_of_Zambia.svg.png" width="22" height="15" class="thumbborder" />&#160;</span><a target="_blank" href="http://en.wikipedia.org/wiki/Zambia" title="Zambia">Zambia</a></td>
<td>1,414</td>
<td>2011</td>
</tr>
<tr>
<td>140</td>
<td align="left"><span class="flagicon"><img alt="" src="//upload.wikimedia.org/wikipedia/en/thumb/4/41/Flag_of_India.svg/22px-Flag_of_India.svg.png" width="22" height="15" class="thumbborder" />&#160;</span><a target="_blank" href="http://en.wikipedia.org/wiki/India" title="India">India</a></td>
<td>1,389</td>
<td>2011</td>
</tr>
<tr>
<td>141</td>
<td align="left"><span class="flagicon"><img alt="" src="/images/flag_icons/22px-Flag_of_Vietnam.svg.png" width="22" height="15" class="thumbborder" />&#160;</span><a target="_blank" href="http://en.wikipedia.org/wiki/Vietnam" title="Vietnam">Vietnam</a></td>
<td>1,374</td>
<td>2011</td>
</tr>
<tr>
<td>142</td>
<td align="left"><span class="flagicon"><img alt="" src="/images/flag_icons/22px-Flag_of_Yemen.svg.png" width="22" height="15" class="thumbborder" />&#160;</span><a target="_blank" href="http://en.wikipedia.org/wiki/Yemen" title="Yemen">Yemen</a></td>
<td>1,340</td>
<td>2011</td>
</tr>
<tr>
<td>143</td>
<td align="left"><span class="flagicon"><img alt="" src="/images/flag_icons/22px-Flag_of_Mauritania.svg.png" width="22" height="15" class="thumbborder" />&#160;</span><a target="_blank" href="http://en.wikipedia.org/wiki/Mauritania" title="Mauritania">Mauritania</a></td>
<td>1,290</td>
<td>2011</td>
</tr>
<tr>
<td>144</td>
<td align="left"><span class="flagicon"><img alt="" src="/images/flag_icons/22px-Flag_of_Lesotho.svg.png" width="22" height="15" class="thumbborder" />&#160;</span><a target="_blank" href="http://en.wikipedia.org/wiki/Lesotho" title="Lesotho">Lesotho</a></td>
<td>1,264</td>
<td>2011</td>
</tr>
<tr>
<td>145</td>
<td align="left"><span class="flagicon"><img alt="" src="/images/flag_icons/22px-Flag_of_Nicaragua.svg.png" width="22" height="13" class="thumbborder" />&#160;</span><a target="_blank" href="http://en.wikipedia.org/wiki/Nicaragua" title="Nicaragua">Nicaragua</a></td>
<td>1,239</td>
<td>2011</td>
</tr>
<tr>
<td>146</td>
<td align="left"><span class="flagicon"><img alt="" src="/images/flag_icons/22px-Flag_of_Cameroon.svg.png" width="22" height="15" class="thumbborder" />&#160;</span><a target="_blank" href="http://en.wikipedia.org/wiki/Cameroon" title="Cameroon">Cameroon</a></td>
<td>1,230</td>
<td>2011</td>
</tr>
<tr>
<td>147</td>
<td align="left"><span class="flagicon"><img alt="" src="/images/flag_icons/22px-Flag_of_Laos.svg.png" width="22" height="15" class="thumbborder" />&#160;</span><a target="_blank" href="http://en.wikipedia.org/wiki/Laos" title="Laos">Laos</a></td>
<td>1,204</td>
<td>2011</td>
</tr>
<tr>
<td>148</td>
<td align="left"><span class="flagicon"><img alt="" src="/images/flag_icons/22px-Flag_of_Pakistan.svg.png" width="22" height="15" class="thumbborder" />&#160;</span><a target="_blank" href="http://en.wikipedia.org/wiki/Pakistan" title="Pakistan">Pakistan</a></td>
<td>1,201</td>
<td>2011</td>
</tr>
<tr>
<td>149</td>
<td align="left"><span class="flagicon"><img alt="" src="/images/flag_icons/22px-Flag_of_Senegal.svg.png" width="22" height="15" class="thumbborder" />&#160;</span><a target="_blank" href="http://en.wikipedia.org/wiki/Senegal" title="Senegal">Senegal</a></td>
<td>1,076</td>
<td>2011</td>
</tr>
<tr>
<td>150</td>
<td align="left"><span class="flagicon"><img alt="" src="/images/flag_icons/22px-Flag_of_Kyrgyzstan.svg.png" width="22" height="13" class="thumbborder" />&#160;</span><a target="_blank" href="http://en.wikipedia.org/wiki/Kyrgyzstan" title="Kyrgyzstan">Kyrgyzstan</a></td>
<td>1,070</td>
<td>2011</td>
</tr>
<tr>
<td>151</td>
<td align="left"><span class="flagicon"><img alt="" src="/images/flag_icons/22px-Flag_of_Cote_d%27Ivoire.svg.png" width="22" height="15" class="thumbborder" />&#160;</span><a target="_blank" href="http://en.wikipedia.org/wiki/C%C3%B4te_d%27Ivoire" title="Côte d'Ivoire">Côte d'Ivoire</a></td>
<td>1,062</td>
<td>2011</td>
</tr>
<tr>
<td>152</td>
<td align="left"><span class="flagicon"><img alt="" src="/images/flag_icons/22px-Flag_of_the_Comoros.svg.png" width="22" height="13" class="thumbborder" />&#160;</span><a target="_blank" href="http://en.wikipedia.org/wiki/Comoros" title="Comoros">Comoros</a></td>
<td>903</td>
<td>2011</td>
</tr>
<tr>
<td>153</td>
<td align="left"><span class="flagicon"><img alt="" src="/images/flag_icons/22px-Flag_of_Chad.svg.png" width="22" height="15" class="thumbborder" />&#160;</span><a target="_blank" href="http://en.wikipedia.org/wiki/Chad" title="Chad">Chad</a></td>
<td>892</td>
<td>2011</td>
</tr>
<tr>
<td>154</td>
<td align="left"><span class="flagicon"><img alt="" src="/images/flag_icons/22px-Flag_of_Cambodia.svg.png" width="22" height="15" class="thumbborder" />&#160;</span><a target="_blank" href="http://en.wikipedia.org/wiki/Cambodia" title="Cambodia">Cambodia</a></td>
<td>852</td>
<td>2011</td>
</tr>
<tr>
<td>155</td>
<td align="left"><span class="flagicon"><img alt="" src="/images/flag_icons/22px-Flag_of_Kenya.svg.png" width="22" height="15" class="thumbborder" />&#160;</span><a target="_blank" href="http://en.wikipedia.org/wiki/Kenya" title="Kenya">Kenya</a></td>
<td>851</td>
<td>2011</td>
</tr>
<tr>
<td>156</td>
<td align="left"><span class="flagicon"><img alt="" src="/images/flag_icons/22px-Flag_of_Myanmar.svg.png" width="22" height="15" class="thumbborder" />&#160;</span><a target="_blank" href="http://en.wikipedia.org/wiki/Burma" title="Burma">Burma</a></td>
<td>832</td>
<td>2011</td>
</tr>
<tr>
<td>157</td>
<td align="left"><span class="flagicon"><img alt="" src="/images/flag_icons/22px-Flag_of_Tajikistan.svg.png" width="22" height="11" class="thumbborder" />&#160;</span><a target="_blank" href="http://en.wikipedia.org/wiki/Tajikistan" title="Tajikistan">Tajikistan</a></td>
<td>831</td>
<td>2011</td>
</tr>
<tr>
<td>158</td>
<td align="left"><span class="flagicon"><img alt="" src="/images/flag_icons/22px-Flag_of_Zimbabwe.svg.png" width="22" height="11" class="thumbborder" />&#160;</span><a target="_blank" href="http://en.wikipedia.org/wiki/Zimbabwe" title="Zimbabwe">Zimbabwe</a></td>
<td>741</td>
<td>2011</td>
</tr>
<tr>
<td>159</td>
<td align="left"><span class="flagicon"><img alt="" src="/images/flag_icons/22px-Flag_of_Haiti.svg.png" width="22" height="13" class="thumbborder" />&#160;</span><a target="_blank" href="http://en.wikipedia.org/wiki/Haiti" title="Haiti">Haiti</a></td>
<td>738</td>
<td>2011</td>
</tr>
<tr>
<td>160</td>
<td align="left"><span class="flagicon"><img alt="" src="/images/flag_icons/22px-Flag_of_Benin.svg.png" width="22" height="15" class="thumbborder" />&#160;</span><a target="_blank" href="http://en.wikipedia.org/wiki/Benin" title="Benin">Benin</a></td>
<td>737</td>
<td>2011</td>
</tr>
<tr>
<td>161</td>
<td align="left"><span class="flagicon"><img alt="" src="/images/flag_icons/22px-Flag_of_Bangladesh.svg.png" width="22" height="13" class="thumbborder" />&#160;</span><a target="_blank" href="http://en.wikipedia.org/wiki/Bangladesh" title="Bangladesh">Bangladesh</a></td>
<td>678</td>
<td>2011</td>
</tr>
<tr>
<td>162</td>
<td align="left"><span class="flagicon"><img alt="" src="/images/flag_icons/22px-Flag_of_Mali.svg.png" width="22" height="15" class="thumbborder" />&#160;</span><a target="_blank" href="http://en.wikipedia.org/wiki/Mali" title="Mali">Mali</a></td>
<td>669</td>
<td>2011</td>
</tr>
<tr>
<td>163</td>
<td align="left"><span class="flagicon"><img alt="" src="/images/flag_icons/22px-Flag_of_Burkina_Faso.svg.png" width="22" height="15" class="thumbborder" />&#160;</span><a target="_blank" href="http://en.wikipedia.org/wiki/Burkina_Faso" title="Burkina Faso">Burkina Faso</a></td>
<td>664</td>
<td>2011</td>
</tr>
<tr>
<td>164</td>
<td align="left"><span class="flagicon"><img alt="" src="/images/flag_icons/16px-Flag_of_Nepal.svg.png" width="16" height="20" />&#160;</span><a target="_blank" href="http://en.wikipedia.org/wiki/Nepal" title="Nepal">Nepal</a></td>
<td>653</td>
<td>2011</td>
</tr>
<tr>
<td>165</td>
<td align="left"><span class="flagicon"><img alt="" src="/images/flag_icons/22px-Flag_of_Rwanda.svg.png" width="22" height="15" class="thumbborder" />&#160;</span><a target="_blank" href="http://en.wikipedia.org/wiki/Rwanda" title="Rwanda">Rwanda</a></td>
<td>605</td>
<td>2011</td>
</tr>
<tr>
<td>166</td>
<td align="left"><span class="flagicon"><img alt="" src="/images/flag_icons/22px-Flag_of_Afghanistan.svg.png" width="22" height="15" class="thumbborder" />&#160;</span><a target="_blank" href="http://en.wikipedia.org/wiki/Afghanistan" title="Afghanistan">Afghanistan</a></td>
<td>585</td>
<td>2011</td>
</tr>
<tr>
<td>167</td>
<td align="left"><span class="flagicon"><img alt="" src="/images/flag_icons/22px-Flag_of_Mozambique.svg.png" width="22" height="15" class="thumbborder" />&#160;</span><a target="_blank" href="http://en.wikipedia.org/wiki/Mozambique" title="Mozambique">Mozambique</a></td>
<td>583</td>
<td>2011</td>
</tr>
<tr>
<td>168</td>
<td align="left"><span class="flagicon"><img alt="" src="/images/flag_icons/22px-Flag_of_Guinea-Bissau.svg.png" width="22" height="11" class="thumbborder" />&#160;</span><a target="_blank" href="http://en.wikipedia.org/wiki/Guinea-Bissau" title="Guinea-Bissau">Guinea-Bissau</a></td>
<td>576</td>
<td>2011</td>
</tr>
<tr>
<td>169</td>
<td align="left"><span class="flagicon"><img alt="" src="/images/flag_icons/22px-Flag_of_Tanzania.svg.png" width="22" height="15" class="thumbborder" />&#160;</span><a target="_blank" href="http://en.wikipedia.org/wiki/Tanzania" title="Tanzania">Tanzania</a></td>
<td>553</td>
<td>2011</td>
</tr>
<tr>
<td>170</td>
<td align="left"><span class="flagicon"><img alt="" src="/images/flag_icons/22px-Flag_of_The_Gambia.svg.png" width="22" height="15" class="thumbborder" />&#160;</span><a target="_blank" href="http://en.wikipedia.org/wiki/The_Gambia" title="The Gambia">Gambia, The</a></td>
<td>543</td>
<td>2011</td>
</tr>
<tr>
<td>171</td>
<td align="left"><span class="flagicon"><img alt="" src="/images/flag_icons/22px-Flag_of_Togo.svg.png" width="22" height="14" class="thumbborder" />&#160;</span><a target="_blank" href="http://en.wikipedia.org/wiki/Togo" title="Togo">Togo</a></td>
<td>506</td>
<td>2011</td>
</tr>
<tr>
<td>172</td>
<td align="left"><span class="flagicon"><img alt="" src="/images/flag_icons/22px-Flag_of_Guinea.svg.png" width="22" height="15" class="thumbborder" />&#160;</span><a target="_blank" href="http://en.wikipedia.org/wiki/Guinea" title="Guinea">Guinea</a></td>
<td>492</td>
<td>2011</td>
</tr>
<tr>
<td>173</td>
<td align="left"><span class="flagicon"><img alt="" src="/images/flag_icons/22px-Flag_of_Uganda.svg.png" width="22" height="15" class="thumbborder" />&#160;</span><a target="_blank" href="http://en.wikipedia.org/wiki/Uganda" title="Uganda">Uganda</a></td>
<td>478</td>
<td>2011</td>
</tr>
<tr>
<td>174</td>
<td align="left"><span class="flagicon"><img alt="" src="/images/flag_icons/22px-Flag_of_Eritrea.svg.png" width="22" height="11" class="thumbborder" />&#160;</span><a target="_blank" href="http://en.wikipedia.org/wiki/Eritrea" title="Eritrea">Eritrea</a></td>
<td>475</td>
<td>2011</td>
</tr>
<tr>
<td>175</td>
<td align="left"><span class="flagicon"><img alt="" src="/images/flag_icons/22px-Flag_of_Madagascar.svg.png" width="22" height="15" class="thumbborder" />&#160;</span><a target="_blank" href="http://en.wikipedia.org/wiki/Madagascar" title="Madagascar">Madagascar</a></td>
<td>459</td>
<td>2011</td>
</tr>
<tr>
<td>176</td>
<td align="left"><span class="flagicon"><img alt="" src="/images/flag_icons/22px-Flag_of_the_Central_African_Republic.svg.png" width="22" height="15" class="thumbborder" />&#160;</span><a target="_blank" href="http://en.wikipedia.org/wiki/Central_African_Republic" title="Central African Republic">Central African Republic</a></td>
<td>456</td>
<td>2011</td>
</tr>
<tr>
<td>177</td>
<td align="left"><span class="flagicon"><img alt="" src="/images/flag_icons/22px-Flag_of_Niger.svg.png" width="22" height="19" class="thumbborder" />&#160;</span><a target="_blank" href="http://en.wikipedia.org/wiki/Niger" title="Niger">Niger</a></td>
<td>399</td>
<td>2011</td>
</tr>
<tr>
<td>178</td>
<td align="left"><span class="flagicon"><img alt="" src="/images/flag_icons/22px-Flag_of_Sierra_Leone.svg.png" width="22" height="15" class="thumbborder" />&#160;</span><a target="_blank" href="http://en.wikipedia.org/wiki/Sierra_Leone" title="Sierra Leone">Sierra Leone</a></td>
<td>366</td>
<td>2011</td>
</tr>
<tr>
<td>179</td>
<td align="left"><span class="flagicon"><img alt="" src="/images/flag_icons/22px-Flag_of_Ethiopia.svg.png" width="22" height="11" class="thumbborder" />&#160;</span><a target="_blank" href="http://en.wikipedia.org/wiki/Ethiopia" title="Ethiopia">Ethiopia</a></td>
<td>360</td>
<td>2011</td>
</tr>
<tr>
<td>180</td>
<td align="left"><span class="flagicon"><img alt="" src="/images/flag_icons/22px-Flag_of_Malawi.svg.png" width="22" height="15" class="thumbborder" />&#160;</span><a target="_blank" href="http://en.wikipedia.org/wiki/Malawi" title="Malawi">Malawi</a></td>
<td>351</td>
<td>2011</td>
</tr>
<tr>
<td>181</td>
<td align="left"><span class="flagicon"><img alt="" src="/images/flag_icons/22px-Flag_of_Liberia.svg.png" width="22" height="12" class="thumbborder" />&#160;</span><a target="_blank" href="http://en.wikipedia.org/wiki/Liberia" title="Liberia">Liberia</a></td>
<td>298</td>
<td>2011</td>
</tr>
<tr>
<td>182</td>
<td align="left"><span class="flagicon"><img alt="" src="/images/flag_icons/22px-Flag_of_Burundi.svg.png" width="22" height="13" class="thumbborder" />&#160;</span><a target="_blank" href="http://en.wikipedia.org/wiki/Burundi" title="Burundi">Burundi</a></td>
<td>279</td>
<td>2011</td>
</tr>
<tr>
<td>183</td>
<td align="left"><span class="flagicon"><img alt="" src="/images/flag_icons/22px-Flag_of_the_Democratic_Republic_of_the_Congo.svg.png" width="22" height="17" class="thumbborder" />&#160;</span><a target="_blank" href="http://en.wikipedia.org/wiki/Democratic_Republic_of_the_Congo" title="Democratic Republic of the Congo">Congo, Democratic Republic of the</a></td>
<td>216</td>
<td>2011</td>
</tr>
</table>

</div>

<cite>
<i>
* List of countries by GDP per capita from <a target="_blank" href="http://en.wikipedia.org/wiki/List_of_countries_by_GDP_(nominal)_per_capita">Wikipedia</a>
</i>
</cite>

<script type="text/javascript">
  $('#example-table').dynatable({
    features: {
      pushState: true
    },
    readers: {
      'us-$': function(el, record) {
        return Number(el.innerHTML.replace(/,/g, ''));
      }
    },
    writers: {
      'us-$': function(record) {
        return record['us-$'].toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
      }
    }
  });
</script>

To get started, simply install jquery.dynatable.js (along with jQuery),
and add the following in the `document.ready` or after the table:

{% highlight js %}
$('#my-table').dynatable();
{% endhighlight %}

## How it works

Dynatable does three things:

<div class="row-fluid">
<div class="span5 how-it-works-col">
<img id="how-it-works" src="/images/dynatable-how-it-works-thin.png" />
</div>
<div class="span7 how-it-works-col">
<ol>
<li>
<h4>Read / Normalize</h4>
<p>
The HTML table is scanned and normalized into an array of JSON
objects (or collection) where each JSON object (or record) corresponds to a row in the
table.
</p>
</li>
<li>
<h4>Operate</h4>
<p>
The JSON collection can be sorted, searched/filtered, and
paginated/sliced.
</p>
</li>
<li>
<h4>Write / Render</h4>
<p>
The results of the Operate step are rendered back to the DOM in the body
of the table.
</p>
</li>
</ol>

<p>
This 3-step approach has several advantages:
</p>

<ul>
<li>
<h4>Efficient reading/operating/writing</h4>
<p>
Since the logic and operations occur on the JSON collection, the
DOM operations (reading and writing/drawing) are grouped together, making
interactions quick and efficient.
</p>
</li>
<li>
<h4>Operations are simple JavaScript</h4>
<p>
An operation is simply a function that acts on the normalized JSON collection; sorting, filtering, and
paginating are straight forward in JavaScript.
</p>
<p>
The built-in functions are easy to augment with your
own custom sorting and querying functions.
</p>
</li>
<li>
<h4>Steps can be customized, swapped or skipped</h4>
<p>
Since the normalization, operation, and rendering modules are separated,
each can easily be customized, replaced, or skipped.
</p>
<p>
Already have a JSON API to work with? Skip the Read step. Want to add
paginating, filtering, and sorting to a chart? Customize the Render step.
</li>
</ul>
</div>
</div>


## Normalization

The first module normalizes an HTML table into a JSON collection.
Dynatable names the attributes of each record according to the table
heading, so that the JSON collection is human-readable and easy to work with.

<div class="side-by-side left">
<p>
The following table:
</p>

{% highlight html %}
<table>
  <thead>
    <tr>
      <th>Name</th>
      <th>Hobby</th>
      <th>Favorite Music</th>
    </tr>
  </thread>
  <tbody>
    <tr>
      <td>Fred</td>
      <td>Roller Skating</td>
      <td>Disco</td>
    </tr>
    <tr>
      <td>Helen</td>
      <td>Rock Climbing</td>
      <td>Alternative</td>
    </tr>
    <tr>
      <td>Glen</td>
      <td>Traveling</td>
      <td>Classical</td>
    </tr>
  </tbody>
</table>
{% endhighlight %}
</div>

<div class="side-by-side right">
<p>
Results in this JSON collection:
</p>

{% highlight js %}
[
  {
    "name": "Fred",
    "hobby": "Roller Skating",
    "favoriteMusic": "Disco"
  },
  {
    "name": "Helen",
    "hobby": "Rock Climbing",
    "favoriteMusic": "Alternative"
  },
  {
    "name": "Glen",
    "hobby": "Traveling",
    "favoriteMusic": "Classical"
  }
]
{% endhighlight %}
</div>

<br class="clear" />

#### Converting attribute names

By default, dynatable converts headings to JSON attribute names using:

<div class="row-fluid">
<div class="span6">
<table class="table table-bordered">
<tr>
<th>Style</th><th>Example</th>
</tr>
<tr><td><code>camelCase</code> (default)</td><td><code>favoriteMusic</code></td><tr>
<tr><td><code>trimDash</code></td><td><code>Favorite-Music</code></td></tr>
<tr><td><code>dashed</code></td><td><code>favorite-music</code></td></tr>
<tr><td><code>underscore</code></td><td><code>favorite_music</code></td></tr>
<tr><td><code>lowercase</code></td><td><code>favorite music</code></td></tr>
</table>
</div>

<div class="span6 no-margin-pre">
{% highlight js %}
$('#my-table').dynatable({
  table: {
    defaultColumnIdStyle: 'trimDash'
  }
});
{% endhighlight %}
</div>
</div>

<div class="row-fluid">
<div class="span4 no-margin-pre">
{% highlight js %}
$.dynatableSetup({
  table: {
    defaultColumnIdStyle: 'underscore'
  }
});
{% endhighlight %}
</div>

<div class="span8">
<div class="alert alert-block">
PROTIP: When using dynatable in a Rails application, set the global
style to <code>underscore</code>, matching the Rails parameter and input
field naming conventions. This is useful when getting the JSON data via
AJAX from Rails, or when connecting dynatable events with form inputs on the page).
</div>
</div>
</div>

We could also define our own column-name transformation function:

{% highlight js %}
$('#my-table')
  .bind('dynatable:init', function(e, dynatable) {
    dynatable.utility.textTransform.myNewStyle = function(text) {
      var newText = doSomethingTo(text);
      return newText;
    };
  })
  .dynatable({
    table: {
      defaultColumnIdStyle: 'myNewStyle'
    }
  });
{% endhighlight %}

Sometimes, we need columns with labels different than the record
attribute name. If a column heading contains the `data-dynatable-column`
attribute, the associated record attribute will be named by that value.

<div class="side-by-side left">
<p>
So this:
</p>

{% highlight html %}
<table id="my-final-table">
  <thead>
    <th data-dynatable-column="name">Band</th>
    <th>Hit</th>
  </thead>
  <tbody>
    ...
  </tbody>
</table>
{% endhighlight %}
</div>

<div class="side-by-side right">
<p>
Would result in:
</p>

{% highlight js %}
[
  {
    "name": ...,
    "song": ...
  },
  {
    "name": ...,
    "song": ...
  }
]
{% endhighlight %}
</div>

<br class="clear" />

The default behavior makes it easy to make an existing HTML table
dynamic. But we're not limited to reading tables.

### Existing JSON

Perhaps we already have our data in JSON format. We can
skip the initial record normalization by setting up an empty table for
rendering and directly passing our data into dynatable:

<div class="side-by-side left">

<p>
HTML table to render records:
</p>

{% highlight html %}
<table id="my-final-table">
  <thead>
    <th>Band</th>
    <th>Song</th>
  </thead>
  <tbody>
  </tbody>
</table>
{% endhighlight %}

<div class="alert alert-block">
Of course we could just code the json data directly in our JavaScript on
the right, but what's the fun in that?
As a bonus, edit the JSON data to the right and watch the data in the table
update in real-time. &#8594;
</div>

</div>

<div class="side-by-side right">
<p>
This is a <code>pre#json-records</code> element:
</p>

<pre id="json-records" contenteditable>
[
  {
    "band": "Weezer",
    "song": "El Scorcho"
  },
  {
    "band": "Chevelle",
    "song": "Family System"
  }
]
</pre>
{% highlight js %}
var $records = $('#json-records'),
    myRecords = JSON.parse($records.text());
$('#my-final-table').dynatable({
  dataset: {
    records: myRecords
  }
});
{% endhighlight %}
</div>
<br class="clear" />

<table id="my-final-table" class="table table-bordered">
  <thead>
    <th>Band</th>
    <th>Song</th>
  </thead>
  <tbody>
  </tbody>
</table>

<script>
(function() {
  var $records = $('#json-records'),
      myRecords = JSON.parse($records.text());
  var dynatable = $('#my-final-table').dynatable({
    dataset: {
      records: myRecords
    }
  }).data('dynatable');

  $records.bind('input', function() {
    try {
      var json = JSON.parse($(this).text());
      $records.removeClass('error');

      dynatable.settings.dataset.originalRecords = json;
      dynatable.process();
    } catch(e) {
      $records.addClass('error');
    }
  });
})();
</script>

### JSON from AJAX

Or maybe, we want to fetch the data via AJAX:

<div class="side-by-side left">
{% highlight html %}
<table id="my-ajax-table">
  <thead>
    <th>Some Attribute</th>
    <th>Some Other Attribute</th>
  </thead>
  <tbody>
  </tbody>
</table>
{% endhighlight %}
</div>

<div class="side-by-side right">
{% highlight js %}
$('#my-ajax-table').dynatable({
  dataset: {
    ajax: true,
    ajaxUrl: '/dynatable-ajax.json',
    records: []
  }
});
{% endhighlight %}

<p>
<a href="/dynatable-ajax.json"><i class="icon-share"></i> View AJAX data</a>
</p>

</div>
<br class="clear" />

<table id="my-ajax-table" class="table table-bordered">
  <thead>
    <th>Some Attribute</th>
    <th>Some Other Attribute</th>
  </thead>
  <tbody>
  </tbody>
</table>

<script>
$('#my-ajax-table').dynatable({
  dataset: {
    ajax: true,
    ajaxUrl: '/dynatable-ajax.json',
    records: []
  }
});
</script>

### Lists and non-Tables

Or maybe we do need the normalization step, but we want to read the
data from an unordered list instead of a table:

We can use the `table`
settings to configure such awesomeness. We'll use the
`table.bodyRowSelector` setting to tell dynatable to use `li` elements
as record rows instead of the default `tr` elements, and we'll use the
`writers._rowWriter` setting to tell dynatable how to process each `li`
into a JSON record object.

Dynatable will call the `readers._rowReader`
function once for each record in the `table.bodyRowSelector` collection,
and pass it the current count index, the DOM element, and the JSON
record. This allows full control over which data in the DOM maps to
which data in the JSON:

*NOTE: We'll also need a `readers._rowReader` function to tell
dynatable how to write the JSON records back to the page, but we'll get
to that in the Render section.*

<div class="side-by-side left">
<p>
The following HTML:
</p>

{% highlight html %}
<ul id="my-list">
  <li>
    <span class="name">Fender Custom Esquire GT</span>
    <span class="type">Guitar</span>
    $<span class="price">450.00</span>
  </li>
  <li>
    <span class="name">ESP LTD B4-E</span>
    <span class="type">Bass</span>
    $<span class="price">400.00</span>
  </li>
</ul>
{% endhighlight %}

<p>
And JavaScript:
</p>

{% highlight js %}
$('#my-list').dynatable({
  table: {
    bodyRowSelector: 'li',
    rowReader: function(index, li, record) {
      var $li = $(li);
      record.name = $li.find('.name').text();
      record.type = $li.find('.type').text();
      record.price = parseFloat($li.find('.price').text());
    }
  }
});
{% endhighlight %}
</div>

<div class="side-by-side right">
<p>
Will result in the following JSON:
</p>

{% highlight js %}
[
  {
    "name": "Fender Custom Esquire GT",
    "type": "Guitar",
    "price": 450.0
  },
  {
    "name": "ESP LTD B4-E",
    "type": "Bass",
    "price": 400.0
  }
]
{% endhighlight %}
</div>
<br class="clear" />

## Operations

Once we have our JSON dataset, we can perform all our interactive and
dynamic logic directly on the JSON using JavaScript. By default,
dynatable comes with functions for sorting, filtering (aka searching), and paginating.

By default, dynatable performs all operations on the JSON record
collection in the page. However, if `dataset.ajax` is enabled, dynatable
simply passes the operations (pagination, queries, and sort
columns) as parameters to the AJAX URL, thereby delegating the logic to
your server-side code.

The parameter names for pushState and AJAX requests can be customized in
the `params` configuration settings for dynatable.

### Sorting

Dynatable allows for single or multi-column, smart sorting out of the
box.

Dynatable can be made aware of the value types of each column, or record
property, so that e.g. dates and numbers are sorted properly (plain-text
sorting would cause February to come before January, and 10 to come
before 2). By default, if dynatable detects HTML code within the value
of a record (such as an `img` tag, it will automatically sort and search
based on the text-equivalent value of the cell, so sorting won't be
affected by HTML tags or attributes). 

#### Basic Sorting

Click the header rows below to sort by each column. Click a header once
for ascending, again for descending, and again to stop sorting by that
column.

Hold shift and click a second row to add secondary sorting, and so on.

<div class="dynatable-demo">
<table id="sorting-example" class="table table-bordered">
  <thead>
    <tr>
      <th>Make</th>
      <th>Model</th>
      <th>Year</th>
      <th>Price</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><img alt="B won't affect sorting" src="/images/vw-icon.png" /> Volkswagen</td>
      <td>Jetta Wolfsburg</td>
      <td>2008</td>
      <td>11,000</td>
    </tr>
    <tr>
      <td><img alt="C won't affect sorting" src="/images/ford-icon.png" /> Ford</td>
      <td>Focus</td>
      <td>2013</td>
      <td>20,000</td>
    </tr>
    <tr>
      <td><img src="/images/ford-icon.png" /> Ford</td>
      <td>Escape</td>
      <td>2001</td>
      <td>4,000</td>
    </tr>
    <tr>
      <td><img alt="A won't affect sorting" src="/images/mini-icon.png" /> Mini</td>
      <td>Cooper</td>
      <td>2001</td>
      <td>8,500</td>
    </tr>
    <tr>
      <td><img src="/images/ford-icon.png" /> Ford</td>
      <td>Focus SVT</td>
      <td>2003</td>
      <td>9,000</td>
    </tr>
  </tbody>
</table>
</div>

<script>
  $('#sorting-example').dynatable({
    features: {
      paginate: false,
      search: false,
      recordCount: false
    },
    readers: {
      'price': function(el, record) {
        return Number(el.innerHTML.replace(/,/g, ''));
      }
    },
    writers: {
      'price': function(record) {
        return record.price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
      }
    }
});
</script>

In the example above, we run the "Price" column values through an
"reader" function which returns a JavaScript `Number` and parses out
the comma seperator. Likewise, we then run it through a rendering "writer" 
which re-inserts the comma when rendering the number back to the DOM.

#### Sort by Another Value

Sometimes, we need one column to sort based on some other attribute.
For example, maybe we have a column which needs to sort on another
hidden column. We can use the `data-dynatable-sorts` attribute on the
column header to let dynatable know.

{% highlight html %}
<table id="sorting-example">
  <thead>
    <tr>
      <th>Name</th>
      <th data-dynatable-sorts="computerYear">Year</th>
      <th style="display: none">Computer Year</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Steve</td>
      <td>Two Thousand and Thirteen</td>
      <td>2013</td>
    </tr>
  </tbody>
</table>
{% endhighlight %}

In the above example, dynatable will detect that the last column heading
is hidden, and will hide all cells under that column, and it will sort
the "Year" column based on the attribute in the last column.

If we have a column we don't want to be sortable, we just add the
`data-dynatable-no-sort` attribute.

#### Custom Sort Functions

We can also use our own custom sort function. This demo sorts
the "color" column by the average color content in the images, from greenish to bluish to
reddish (using javascript and canvas in our sorting function to evaluate
the color content of each image):

<div class="row-fluid">

<div class="span6">

<div class="dynatable-demo">
<table id="sorting-function-example" class="table table-bordered">
  <thead>
    <tr>
      <th data-dynatable-column="color" data-dynatable-sorts="dec">Sort by Color</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><img src="/images/dinosaurs/150px-Cerasinops_BW.jpg" /> Cerasinops</td>
    </tr>
    <tr>
      <td><img src="/images/dinosaurs/150px-Ceratosaurus_sketch2.jpg" /> Ceratosaurus</td>
    </tr>
    <tr>
      <td><img src="/images/dinosaurs/150px-Allosaurus_BW.jpg" /> Allosaurus</td>
    </tr>
    <tr>
      <td><img src="/images/dinosaurs/150px-Tyrannosaurus_BW.jpg" /> Tyrannosaurus</td>
    </tr>
    <tr>
      <td><img src="/images/dinosaurs/150px-Brachylophosaurus-v4.jpg" /> Brachylophosaurus</td>
    </tr>
    <tr>
      <td><img src="/images/dinosaurs/Albertaceratops_BW.jpg" /> Albertaceratops</td>
    </tr>
    <tr>
      <td><img src="/images/dinosaurs/Utahraptor_BW.jpg" /> Utahraptor</td>
    </tr>
  </tbody>
</table>
</div>

<cite>
<i>
* Images from List of North American dinosaurs from <a target="_blank" href="http://en.wikipedia.org/wiki/List_of_North_American_dinosaurs">Wikipedia</a>
</i>
</cite>

<script>
(function() {
  function getAverageRGB(imgEl) {

    var blockSize = 5, // only visit every 5 pixels
        defaultRGB = {r:0,g:0,b:0}, // for non-supporting envs
        canvas = document.createElement('canvas'),
        context = canvas.getContext && canvas.getContext('2d'),
        data, width, height,
        i = -4,
        length,
        rgb = {r:0,g:0,b:0},
        count = 0;

    if (!context) {
      return defaultRGB;
    }

    height = canvas.height = imgEl.naturalHeight || imgEl.offsetHeight || imgEl.height;
    width = canvas.width = imgEl.naturalWidth || imgEl.offsetWidth || imgEl.width;

    context.drawImage(imgEl, 0, 0);

    try {
      data = context.getImageData(0, 0, width, height);
    } catch(e) {
      /* security error, img on diff domain */
      return defaultRGB;
    }

    length = data.data.length;

    while ( (i += blockSize * 4) < length ) {
      // Ignore grayish values
      if ( Math.abs(data.data[i] - data.data[i+1]) > 25 && Math.abs(data.data[i+1] - data.data[i+3]) > 25 ) {
        ++count;
        rgb.r += data.data[i];
        rgb.g += data.data[i+1];
        rgb.b += data.data[i+2];
      }
    }

    // ~~ used to floor values
    rgb.r = ~~(rgb.r/count);
    rgb.g = ~~(rgb.g/count);
    rgb.b = ~~(rgb.b/count);

    return rgb;

  }

  $(window).load(function() {
    $('#sorting-function-example')
      .dynatable({
        features: {
          paginate: false,
          search: false,
          recordCount: false
        },
        readers: {
          color: function(cell, record) {
            var $cell = $(cell),
                rgb = getAverageRGB($cell.find('img').get(0)),
                dec = ( rgb.r << 16 ) + ( rgb.g << 8 ) + rgb.b;
            record['dec'] = dec;
            record['name'] = $cell.text();
            return $cell.html();
          }
        }
      });
  })
})();
</script>
</div>

<div class="span6">
<p>
We may also sort programmatically with the dynatable API. For example,
let's add a button which sorts our table by dinosaur names, and a button
that clears all our sorts, putting the records back in their original
order:
</p>

<p>
<a href="#" class="btn primary" id="sorting-function-example-button">Sort A-Z</a>
<a href="#" class="btn" id="sorting-function-example-clear-button">Clear Sorts</a>
</p>

<script>
(function() {
  $('#sorting-function-example').bind('dynatable:init', function(e, dynatable) {

    $('#sorting-function-example-button').click( function(e) {
      // Clear any existing sorts
      dynatable.sorts.clear();
      dynatable.sorts.add('name', 1) // 1=ASCENDING, -1=DESCENDING
      dynatable.process();
      e.preventDefault();
    });

    $('#sorting-function-example-clear-button').click( function(e) {
      dynatable.sorts.clear();
      dynatable.process();
      e.preventDefault()
    });
  });
})();
</script>

<p>
The code for the buttons above:
</p>

{% highlight js %}
$('#sorting-function-example').bind('dynatable:init', function(e, dynatable) {

  $('#sorting-function-example-button').click( function(e) {
    // Clear any existing sorts
    dynatable.sorts.clear();
    dynatable.sorts.add('name', 1) // 1=ASCENDING, -1=DESCENDING
    dynatable.process();
    e.preventDefault();
  });

  $('#sorting-function-example-clear-button').click( function(e) {
    dynatable.sorts.clear();
    dynatable.process();
    e.preventDefault()
  });
});
{% endhighlight %}
</div>
</div>

There are a couple different ways to achieve the custom color sorting above,
and it's useful to explore each way to gain a better understanding of
what's possible.

#### Creating a Custom Sort Function

The first way is to create a custom sort function, add it to dynatable's
list of sort functions in `sorts.functions`, and then tell dynatable to use that function
when sorting that column.

A sort function takes in the two records being compared (a and b below),
the attribute column currently being sorted, and the direction (1 for
ascending, -1 for descending). The function needs to return a positive
number (if a is higher than b), a negative number (if b is higher than
a), or 0 (if a and b are tied).

{% highlight js %}
// Our custom sort function
function rgbSort(a, b, attr, direction) {

  // Assuming we've created a separate function
  // to get the average RGB value from an image.
  // (see source for example above for getAverageRGB function)
  var aRgb = getAverageRGB(a.img),
      bRgb = getAverageRGB(b.img),
      aDec = ( aRgb.r << 16 ) + ( aRgb.g << 8 ) + aRgb.b,
      bDec = ( bRgb.r << 16 ) + ( bRgb.g << 8 ) + bRgb.b,
      comparison = aDec - bDec;

  return direction > 0 ? comparison : -comparison;
};

// Wait until images are loaded
$(window).load(function() {
  $('#sorting-function-example')

    // Add our custom sort function to dynatable
    .bind('dynatable:init', function(e, dynatable) {
      dynatable.sorts.functions["rgb"] = rgbSort;
    })

    // Initialize dynatable
    .dynatable({
      features: {
        paginate: false,
        search: false,
        recordCount: false
      },
      dataset: {
        // When we sort on the color column,
        // use our custom sort added above.
        sortTypes: {
          color: 'rgbSort'
        }
      },
      readers: {
        color: function(cell, record) {
          var $cell = $(cell);

          // Store the average RGB image color value
          // as a decimal in "dec" attribute.
          record['img'] = $cell.find('img').get(0);

          // Return the HTML of the cell to be stored
          // as the "color" attribute.
          return $cell.html();
        }
      }
    });
})
{% endhighlight %}

The sort function gets run between each pair of records to determine
which comes first. This means it gets run `n!` times (where n is the
number of records), or `n-1` times for each record.

So, the average RGB
values in this example are being re-computed multiple times for each
record. This kills the efficiency.

#### Creating a Custom Attribute to Sort On

Instead, it's much more efficient to compute values only once for each
record and store them as record attributes. We were already storing the
image file above for each record, so why not go ahead and store the RGB
values too?

Furthermore, notice that in our custom `rgbSort` function above, after it
calculates the RGB value for each record, it's just doing a standard
number comparison (by subtracting one value from the other). Dynatable
has built-in "number" sorting.

{% highlight js %}
$(window).load(function() {
  $('#sorting-function-example')

    // Initialize dynatable
    .dynatable({
      features: {
        paginate: false,
        search: false,
        recordCount: false
      },

      // We have one column, but it contains multiple types of info.
      // So let's define a custom reader for that column to grab
      // all the extra info and store it in our normalized records.
      readers: {
        color: function(cell, record) {

          // Inspect the source of this example
          // to see the getAverageRGB function.
          var $cell = $(cell),
              rgb = getAverageRGB($cell.find('img').get(0)),
              dec = ( rgb.r << 16 ) + ( rgb.g << 8 ) + rgb.b;

          // Store the average RGB image color value
          // as a decimal in "dec" attribute.
          record['dec'] = dec;

          // Grab the dinosaur name.
          record['name'] = $cell.text();

          // Return the HTML of the cell to be stored
          // as the "color" attribute.
          return $cell.html();
        }
      }
    });
})
{% endhighlight %}

We could now create a custom sort function for the "color" column, to make
sure it sorts based on the "dec" attribute instead. Or, we could just tell
dynatable to sort the "color" column based on the "name" attribute
directly in our table with `data-dynatable-sorts`:

{% highlight html %}
<table>
  <thead>
    <tr>
      <th data-dynatable-column="color" data-dynatable-sorts="dec">Sort by Color</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><img src="/images/dinosaurs/cerasinops.jpg" /> Cerasinops</td>
    </tr>
    <!-- ... -->
  </tbody>
</table>
{% endhighlight %}

### Querying
(aka filtering or searching)

In addition to sorting, we can also query the data by some
term or value. By default, dynatable includes a search box which
matches from the plain-text values (case-insensitive) across all attributes of the records.
Try it in the demo at the top of this page, by typing in the search box
above the table and hitting "Enter" or "Tab".

#### Custom Query Functions

Queries can also be added programmatically via JavaScript to be
processed by dynatable. We simply add a query key-value to the
`dataset.queries` array, where the key matches the JSON record attribute
you'd like to match, and the value is what we're matching.

Below, we'll include the default text search, and
additionally include our own "Year" filter.

<div class="side-by-side left">
{% highlight html %}
<select id="search-year" name="year">
  <option></option>
  <option>2001</option>
  <option>2003</option>
  <option>2008</option>
  <option>2013</option>
</select>
{% endhighlight %}

<div class="alert alert-block">
NOTE: This JS is the long version, to show how customizable queries
are. See below for the easier, built-in way to add your own query
controls. &#8594;
</div>
</div>

<div class="side-by-side right">
{% highlight js %}
var dynatable = $('#search-example').dynatable({
  features: {
    paginate: false,
    recordCount: false,
    sorting: false
  }
}).data('dynatable');

$('#search-year').change( function() {
  var value = $(this).val();
  if (value === "") {
    dynatable.queries.remove("year");
  } else {
    dynatable.queries.add("year",value);
  }
  dynatable.process();
});
{% endhighlight %}
</div>
<br class="clear" />

<div class="dynatable-demo">
<div id="search-example-year-filter" style="float: left;">
  Year:
  <select id="search-year" name="year">
    <option></option>
    <option>2001</option>
    <option>2003</option>
    <option>2008</option>
    <option>2013</option>
  </select>
</div>

<table id="search-example" class="table table-bordered">
  <thead>
    <tr>
      <th>Make</th>
      <th>Model</th>
      <th>Year</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><img alt="B won't affect sorting" src="/images/vw-icon.png" /> Volkswagen</td>
      <td>Jetta Wolfsburg</td>
      <td>2008</td>
    </tr>
    <tr>
      <td><img alt="C won't affect sorting" src="/images/ford-icon.png" /> Ford</td>
      <td>Focus</td>
      <td>2013</td>
    </tr>
    <tr>
      <td><img src="/images/ford-icon.png" /> Ford</td>
      <td>Escape</td>
      <td>2001</td>
    </tr>
    <tr>
      <td><img alt="A won't affect sorting" src="/images/mini-icon.png" /> Mini</td>
      <td>Cooper</td>
      <td>2001</td>
    </tr>
    <tr>
      <td><img src="/images/ford-icon.png" /> Ford</td>
      <td>Focus SVT</td>
      <td>2003</td>
    </tr>
  </tbody>
</table>
</div>

<script>
(function() {
  var dynatable = $('#search-example').dynatable({
    features: {
      paginate: false,
      recordCount: false,
      sorting: false
    }
  }).data('dynatable');

  $('#search-year').change( function() {
    var value = $(this).val();
    if (value === "") {
      dynatable.queries.remove("year");
    } else {
      dynatable.queries.add("year",value);
    }
    dynatable.process();
  });
})();
</script>

There's a shortcut to the above code; to hook up our own search filters,
we can just pass an array of jQuery selectors which point to our filter
inputs. Instead of binding to our input's change event, adding the
input's value to the queries array and calling the `dynatable.process()`
function, we could have just done this:

{% highlight js %}
$('#search-example').dynatable({
  features: {
    paginate: false,
    recordCount: false,
    sorting: false
  },
  inputs: {
    queries: $('#search-year')
  }
});
{% endhighlight %}

Doing it this way also hooks the query into the pushState
functionality to update the page URL parameters and cache the query
result for the browser's forward- and back-buttons, and sets the query
event (the JS event that processes the query) to the `inputs.queryEvent`
setting (which can also be customized per-input via the
`data-dynatable-query-event` attribute). The key-name for the query will
be set to the `data-dynatable-query` attribute, the `name` attribute, or
the `id` for the input.

Using our own query filters, we may also need something other than
text-matching. Perhaps we want a filter which sets a price range. We can
add our query input with the `inputs.queries` setting as above, and then
define our own query function for that key.

*When using our own query function, the query key must match the name of
the query function, rather than the name of a column or record
attribute.*

{% highlight js %}
$('#search-function-example')
  .bind('dynatable:init', function(e, dynatable) {
    dynatable.queries.functions['max-price'] = function(record, queryValue) {
      return parseFloat(record.price.replace(/,/,'')) <= parseFloat(queryValue);
    };
  })
  .dynatable({
    features: {
      paginate: false,
      recordCount: false,
      sorting: false,
      search: false
    },
    inputs: {
      queries: $('#max-price')
    }
  });
{% endhighlight %}

By default, when a query is added, dynatable will first look in the
`queries.functions` object to find the query function matching the
query's key-name. If none is found, it will fall-back to doing a
plain-text search on the record attribute matching the query key-name.
If that attribute doesn't exist either, then dynatable will throw and
error alerting us to add the function.

The query function is called once for each record and should return
either `true` or `false`, letting dynatable know if that record matches
the query or not.

<div class="dynatable-demo">
<div id="search-function-example-price-filter" style="float: left; margin-bottom: 1em;">
  Max Price:
  $<input id="max-price" type=number step=1000 />
</div>
<table id="search-function-example" class="table table-bordered">
  <thead>
    <tr>
      <th>Make</th>
      <th>Model</th>
      <th>Year</th>
      <th>Price</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Volkswagen</td>
      <td>Jetta Wolfsburg</td>
      <td>2008</td>
      <td>11,000</td>
    </tr>
    <tr>
      <td>Ford</td>
      <td>Focus</td>
      <td>2013</td>
      <td>20,000</td>
    </tr>
    <tr>
      <td>Ford</td>
      <td>Escape</td>
      <td>2001</td>
      <td>4,000</td>
    </tr>
    <tr>
      <td>Mini</td>
      <td>Cooper</td>
      <td>2001</td>
      <td>8,500</td>
    </tr>
    <tr>
      <td>Ford</td>
      <td>Focus SVT</td>
      <td>2003</td>
      <td>9,000</td>
    </tr>
  </tbody>
</table>
</div>

<script>
(function() {
  $('#search-function-example')
    .bind('dynatable:init', function(e, dynatable) {
      dynatable.queries.functions['max-price'] = function(record, queryValue) {
        return parseFloat(record.price.replace(/,/,'')) <= parseFloat(queryValue);
      };
    })
    .dynatable({
      features: {
        paginate: false,
        recordCount: false,
        sorting: false,
        search: false
      },
      inputs: {
        queries: $('#max-price')
      }
    });
})();
</script>

### Paginating

Dynatable also provides pagination by default, by selecting a specific
slice of the JSON record collection to render to the page, and adding
page selection links to the table, as well as a drop-down allowing the
user to select how many records are shown per page.

In other words, dynatable is aware
that the currently rendered records in the DOM may only be a subset of
the total records.

We can customize the default number of records displayed per page via
the `dataset.perPageDefault` configuration setting. And we can customize the
per-page options via the `dataset.perPageOptions` configuration setting.

We can also set the page and perPage values via the dynatable API:

{% highlight js %}
var dynatable = $('#my-table').data('dynatable');
dynatable.perPage.set(20); // Show 20 records per page
dynatable.page.set(5); // Go to page 5
dynatable.process();
{% endhighlight %}

If `dataset.ajax` is enabled, then the page and per-page parameters are
simply passed to the server. 

### Record Count

When pagination is enabled, dynatable will also show the currently
displayed records and the total number of records in the form:

{% highlight smarty %}
Showing {x} to {y} out of {z} records
{% endhighlight %}

This message can be customized via the `dataset.recordCountText`
configuration, and the `params.records` configuration. The text
displayed on the table is of the form: 

{% highlight smarty %}
{dataset.recordCountText} {x} to {y} out of {z} {params.records}
{% endhighlight %}

Dynatable will also show the queried and total record counts when
querying data, in the form:

{% highlight smarty %}
Showing {x} of {y} records (filtered from {z} total records)
{% endhighlight %}

Or more accurately:

{% highlight smarty %}
{dataset.recordCountText} {x} of {y} {params.records} (filtered from {z} total {params.records})
{% endhighlight %}

When `dataset.ajax` is enabled, in order for dynatable to display this
message, our server must return
the number of total records in addition to the sliced record set for the
current page. By default, dynatable looks for the total number of
records in the `responseJSON.totalRecordCount` attribute.

### PushState

Dynatable uses HTML5's pushState to store operation results (sorting,
querying and paginating) and update the browser's URL, so that we may
hit the browser's back- and forward-buttons to step through our
interactions with the table.

If the resulting data can be stored in the browser's
pushState cache, then it will be, and dynatable will simply render the
cached data for that step rather than re-running the (potentially
complex) operations. If `dataset.ajax` is enabled, then dynatable will
render the pushState-cached results rather than re-submitting the AJAX
request to the server.

If the resulting dataset for a given operation is too large for the
pushState cache, then dynatable will automatically fallback to
re-running the operations or re-sending the AJAX request to the server.

<div class="alert alert-block">
  PushState works in <a href="http://caniuse.com/#search=pushstate"
target=_blank>all modern browsers that support it</a>. For other
browsers (IE9 or earlier), a pushState polyfill such as
<a href="https://github.com/browserstate/history.js" target=_blank>History.js</a>
may be used.
</div>

### Processing Indicator

For long-running operations (and for AJAX tables which must request data
form the server), dynatable automatically appends a "processing"
indicator to the table to let users know something is happening. We can
style this indicator however we want. By default, it's just the word
"Processing..." overlaid in the center of the table.

We can customize the html content of the processing indicator (including
images or gifs), using the <code>inputs.processingText</code>
configuration.

We can also style the processing indicator overlay and inner block, by
attaching styles to the
<code>dynatable-processing</code> class and the <code>.dynatable-processing span</code>
CSS selector, respectively.

<div class="row-fluid">
<div class="span6">
<div class="dynatable-demo">
<table id="processing-indicator-example" class="table table-bordered">
  <thead>
    <tr>
      <th>Important Things</th>
    </tr>
  </thread>
  <tbody>
    <tr>
      <td>E=MC<sup>2</sup></td>
    </tr>
    <tr>
      <td>F=MA</td>
    </tr>
    <tr>
      <td>A<sup>2</sup>+B<sup>2</sup>=C<sup>2</sup></td>
    </tr>
  </tbody>
</table>
</div>

<script>
(function() {
  $('#processing-indicator-example')
    .bind('dynatable:init', function(e, dynatable) {
      dynatable.sorts.functions['long-sort'] = function(a, b, attr, ascending) {
        for (var i=0; i < 10000; i++) {
          // Woo!
        }
        return dynatable.sorts.functions.string(a, b, attr, ascending);
      };
    })
    .dynatable({
      features: {
        paginate: false,
        search: false,
        recordCount: false,
        pushState: false
      },
      dataset: {
        sortTypes: {
          importantThings: 'long-sort'
        }
      }
    });
})();
</script>

<a href="#" class="btn primary"
id="processing-indicator-example-button">Show Standard Processing
Indicator</a>

<script>
(function() {
  var dynatable = $('#processing-indicator-example').data('dynatable');
  $('#processing-indicator-example-button').click( function(e) {
    dynatable.processingIndicator.show();
    setTimeout(function() {
      dynatable.processingIndicator.hide();
    }, 3000);
    e.preventDefault();
  });
})();
</script>
</div>

<div class="span6">
<div class="dynatable-demo">
<table id="processing-indicator-nice-example" class="table table-bordered">
  <thead>
    <tr>
      <th>Important Things</th>
    </tr>
  </thread>
  <tbody>
    <tr>
      <td>E=MC<sup>2</sup></td>
    </tr>
    <tr>
      <td>F=MA</td>
    </tr>
    <tr>
      <td>A<sup>2</sup>+B<sup>2</sup>=C<sup>2</sup></td>
    </tr>
  </tbody>
</table>
</div>

<script>
(function() {
  $('#processing-indicator-nice-example').dynatable({
    features: {
      paginate: false,
      search: false,
      recordCount: false,
      pushState: false,
      sort: false
    },
    inputs: {
      processingText: 'Loading <img src="/images/loading.gif" />'
    }
  });
})();
</script>

<a href="#" class="btn primary" id="processing-indicator-nice-example-button">Show Nicer Processing Indicator</a>

<script>
(function() {
  var dynatable = $('#processing-indicator-nice-example').data('dynatable');
  $('#processing-indicator-nice-example-button').click( function(e) {
    dynatable.processingIndicator.hide();
    dynatable.processingIndicator.show();
    setTimeout(function() {
      dynatable.processingIndicator.hide();
    }, 3000);
    e.preventDefault();
  });
})();
</script>

</div>
</div>

To show or hide the processing indicator above, we can call the
<code>dynatable.processingIndicator.show()</code> and
<code>dynatable.processingIndicator.hide()</code> functions.

For the nicer example, we just add our own custom markup for the
processing indicator, along with some custom CSS.

{% highlight js %}
$('#processing-indicator-nice-example').dynatable({
  inputs: {
    processingText: 'Loading <img src="/images/loading.gif" />'
  }
});
{% endhighlight %}

{% highlight css %}
.dynatable-processing {
  background: #000;
  opacity: 0.6;
  -webkit-border-radius: 4px;
  -moz-border-radius: 4px;
  border-radius: 4px;
}
.dynatable-processing span {
  background: #FFF;
  border: solid 2px #57A957;
  color: #333;
  padding: 25px;
  font-size: 2em;
  box-shadow: 0px 0px 15px rgba(0,0,0,0.5);
}
.dynatable-processing span img {
  vertical-align: middle;
}
{% endhighlight %}

## Rendering

When rendering JSON data to the page, dynatable passes data through
"writers" (you may notice that this is the opposite of the normalization step
which runs the DOM elements through "readers").

When rendering (and normalizing), dynatable assumes that our container element (on which
we called dynatable) contains elements matching
`table.bodyRowSelector`, each mapping to one record. By default,
dynatable assumes we're rendering to an HTML table, so our
`table.bodyRowSelector` is `'tbody tr'`.

To render our records, dynatable will loop through our records, running
`writers._rowWriter` on each record to create a collection of DOM elements.
The default `writers._rowWriter` creates a table `tr` element and loops
through the element attributes (matching our columns) to call
`writers._cellWriter` on each.

### A Stylized List


<div class="dynatable-demo">
  <ul id="ul-example" class="row-fluid">
    <li class="span4" data-color="gray">
      <div class="thumbnail">
        <div class="thumbnail-image">
          <img src="/images/dinosaurs/Stegosaurus_BW.jpg" />
        </div>
        <div class="caption">
          <h3>Stegosaurus armatus</h3>
          <p>State: Colorado</p>
          <p>Year: 1982</p>
          <p><a target="_blank" href="http://en.wikipedia.org/wiki/Stegosaurus" class="btn btn-primary">View</a> <a href="#" class="btn">Action</a></p>
        </div>
      </div>
    </li>
    <li class="span4" data-color="color">
      <div class="thumbnail">
        <div class="thumbnail-image">
          <img src="/images/dinosaurs/300px-Astrodon1DB.jpg" />
        </div>
        <div class="caption">
          <h3>Astrodon johnstoni</h3>
          <p>State: Maryland</p>
          <p>Year: 1998</p>
          <p><a target="_blank" href="http://en.wikipedia.org/wiki/Astrodon_johnstoni" class="btn btn-primary">View</a> <a href="#" class="btn">Action</a></p>
        </div>
      </div>
    </li>
    <li class="span4" data-color="gray">
      <div class="thumbnail">
        <div class="thumbnail-image">
          <img src="/images/dinosaurs/300px-Hypsibema_missouriensis_Bollinger_County_Museum_of_Natural_History.jpg" />
        </div>
        <div class="caption">
          <h3>Hypsibema missouriensis</h3>
          <p>State: Missouri</p>
          <p>Year: 2004</p>
          <p><a target="_blank" href="http://en.wikipedia.org/wiki/Hypsibema_missouriensis" class="btn btn-primary">View</a> <a href="#" class="btn">Action</a></p>
        </div>
      </div>
    </li>
    <li class="span4" data-color="color">
      <div class="thumbnail">
        <div class="thumbnail-image">
          <img src="/images/dinosaurs/Knight_hadrosaurs.jpg" />
        </div>
        <div class="caption">
          <h3>Hadrosaurus foulkii</h3>
          <p>State: New Jersey</p>
          <p>Year: 1991</p>
          <p><a target="_blank" href="http://en.wikipedia.org/wiki/Hadrosaurus" class="btn btn-primary">View</a> <a href="#" class="btn">Action</a></p>
        </div>
      </div>
    </li>
    <li class="span4" data-color="gray">
      <div class="thumbnail">
        <div class="thumbnail-image">
          <img src="/images/dinosaurs/300px-Sauroposeidon_dinosaur.svg.png" />
        </div>
        <div class="caption">
          <h3>Paluxysaurus jonesi</h3>
          <p>State: Texas</p>
          <p>Year: 2009</p>
          <p><a target="_blank" href="http://en.wikipedia.org/wiki/Paluxysaurus" class="btn btn-primary">View</a> <a href="#" class="btn">Action</a></p>
        </div>
      </div>
    </li>
    <li class="span4" data-color="color">
      <div class="thumbnail">
        <div class="thumbnail-image">
          <img src="/images/dinosaurs/300px-Triceratops_BW.jpg" />
        </div>
        <div class="caption">
          <h3>Triceratops</h3>
          <p>State: Wyoming</p>
          <p>Year: 1994</p>
          <p><a target="_blank" href="http://en.wikipedia.org/wiki/Triceratops" class="btn btn-primary">View</a> <a href="#" class="btn">Action</a></p>
        </div>
      </div>
    </li>
  </ul>
</div>

<cite>
<i>
* List of U.S. state dinosaurs from <a target="_blank" href="http://en.wikipedia.org/wiki/List_of_U.S._state_dinosaurs">Wikipedia</a>
</i>
</cite>

<script>
(function() {
  // Function that renders the list items from our records
  function ulWriter(rowIndex, record, columns, cellWriter) {
    var cssClass = "span4", li;
    if (rowIndex % 3 === 0) { cssClass += ' first'; }
    li = '<li class="' + cssClass + '"><div class="thumbnail"><div class="thumbnail-image">' + record.thumbnail + '</div><div class="caption">' + record.caption + '</div></div></li>';
    return li;
  }

  // Function that creates our records from the DOM when the page is loaded
  function ulReader(index, li, record) {
    var $li = $(li),
        $caption = $li.find('.caption');
    record.thumbnail = $li.find('.thumbnail-image').html();
    record.caption = $caption.html();
    record.label = $caption.find('h3').text();
    record.description = $caption.find('p').text();
    record.color = $li.data('color');
  }

  $('#ul-example').dynatable({
    table: {
      bodyRowSelector: 'li'
    },
    dataset: {
      perPageDefault: 3,
      perPageOptions: [3, 6]
    },
    writers: {
      _rowWriter: ulWriter
    },
    readers: {
      _rowReader: ulReader
    },
    params: {
      records: 'dinosaurs'
    }
  });
})();
</script>

If our container element is a `ul`, like above, we could customize our rowWriter as
follows:

{% highlight html %}
<ul id="ul-example" class="row-fluid">
  <li class="span4" data-color="gray">
    <div class="thumbnail">
      <div class="thumbnail-image">
        <img src="/images/dinosaurs/Stegosaurus_BW.jpg" />
      </div>
      <div class="caption">
        <h3>Stegosaurus armatus</h3>
        <p>State: Colorado</p>
        <p>Year: 1982</p>
        <p><a href="http://en.wikipedia.org/wiki/Stegosaurus" class="btn btn-primary">View</a> <a href="#" class="btn">View</a></p>
      </div>
    </div>
  </li>
  <!-- ... //-->
</ul>
{% endhighlight %}

{% highlight js %}
// Function that renders the list items from our records
function ulWriter(rowIndex, record, columns, cellWriter) {
  var cssClass = "span4", li;
  if (rowIndex % 3 === 0) { cssClass += ' first'; }
  li = '<li class="' + cssClass + '"><div class="thumbnail"><div class="thumbnail-image">' + record.thumbnail + '</div><div class="caption">' + record.caption + '</div></div></li>';
  return li;
}

// Function that creates our records from the DOM when the page is loaded
function ulReader(index, li, record) {
  var $li = $(li),
      $caption = $li.find('.caption');
  record.thumbnail = $li.find('.thumbnail-image').html();
  record.caption = $caption.html();
  record.label = $caption.find('h3').text();
  record.description = $caption.find('p').text();
  record.color = $li.data('color');
}

$('#ul-example').dynatable({
  table: {
    bodyRowSelector: 'li'
  },
  dataset: {
    perPageDefault: 3,
    perPageOptions: [3, 6]
  },
  writers: {
    _rowWriter: ulWriter
  },
  readers: {
    _rowReader: ulReader
  },
  params: {
    records: 'kittens'
  }
});
{% endhighlight %}

We could have defined our own `writers._cellWriter` as well, defining a
custom function for rendering each attribute within the row, but we opted
to skip it entirely and to just do everything in the `writers._rowWriter`.

### An Interactive Chart

<div id="chart-example-chart"></div>
<a class="btn primary" id="toggle-chart-table">Show Table to Sort the Chart Series</a>
<table id="chart-example" class="table table-bordered">
  <thead><tr><th>City</th><th>Population</th></tr></thead>
  <tbody>
    <tr><td>Tokyo</td><td>34.4</td></tr>
    <tr><td>Jakarta</td><td>21.8</td></tr>
    <tr><td>New York</td><td>20.1</td></tr>
    <tr><td>Seoul</td><td>20</td></tr>
    <tr><td>Manila</td><td>19.6</td></tr>
    <tr><td>Mumbai</td><td>19.5</td></tr>
    <tr><td>Sao Paulo</td><td>19.1</td></tr>
    <tr><td>Mexico City</td><td>18.4</td></tr>
    <tr><td>Dehli</td><td>18</td></tr>
    <tr><td>Osaka</td><td>17.3</td></tr>
    <tr><td>Cairo</td><td>16.8</td></tr>
    <tr><td>Kolkata</td><td>15</td></tr>
    <tr><td>Los Angeles</td><td>14.7</td></tr>
    <tr><td>Shanghai</td><td>14.5</td></tr>
    <tr><td>Moscow</td><td>13.3</td></tr>
    <tr><td>Beijing</td><td>12.8</td></tr>
    <tr><td>Buenos Aires</td><td>12.4</td></tr>
    <tr><td>Guangzhou</td><td>11.8</td></tr>
    <tr><td>Shenzhen</td><td>11.7</td></tr>
    <tr><td>Istanbul</td><td>11.2</td></tr>
  </tbody>
</table>

<script>
(function() {
  var $table = $('#chart-example'), $chart = $('#chart-example-chart'), chart;

  // Create a button to toggle our table's visibility.
  // We could just hide it completely if we don't need it.
  $('#toggle-chart-table').click(function(e) {
    e.preventDefault();
    $table.toggle();
  });

  // Set up our Highcharts chart
  chart = new Highcharts.Chart({
    chart: {
      type: 'column',
      renderTo: 'chart-example-chart'
    },
    title: {
      text: 'World\'s largest cities per 2008'
    },
    yAxis: {
      min: 0,
      title: {
        text: 'Population (millions)'
      }
    },
    series: [{
      name: 'Population',
      color: '#006A72'
    }]
  });

  // Create a function to update the chart with the current working set
  // of records from dynatable, after all operations have been run.
  function updateChart() {
    var dynatable = $table.data('dynatable'), categories = [], values = [];
    $.each(dynatable.settings.dataset.records, function() {
      categories.push(this.city);
      values.push(parseFloat(this.population));
    });

    chart.xAxis[0].setCategories(categories);
    chart.series[0].setData(values);
  };

  // Attach dynatable to our table,
  // and trigger our update function whenever we interact with it.
  $table
    .dynatable({
      inputs: {
        queryEvent: 'blur change keyup',
        recordCountTarget: $chart,
        paginationLinkTarget: $chart,
        searchTarget: $chart,
        perPageTarget: $chart
      },
      dataset: {
        perPageOptions: [5, 10, 20],
        sortTypes: {
          'population': 'number'
        }
      }
    })
    .hide()
    .bind('dynatable:afterProcess', updateChart);

  // Run our updateChart function for the first time.
  updateChart();
})();
</script>

Our initial data:

{% highlight html %}
<div id="chart-example-chart"></div>
<a class="btn primary" id="toggle-chart-table">Show Table to Sort the Chart Series</a>
<table id="chart-example" class="table table-bordered">
  <thead><tr><th>City</th><th>Population</th></tr></thead>
  <tbody>
    <tr><td>Tokyo</td><td>34.4</td></tr>
    <tr><td>Jakarta</td><td>21.8</td></tr>
    <tr><td>New York</td><td>20.1</td></tr>
    <tr><td>Seoul</td><td>20</td></tr>
    <tr><td>Manila</td><td>19.6</td></tr>
    <tr><td>Mumbai</td><td>19.5</td></tr>
    <tr><td>Sao Paulo</td><td>19.1</td></tr>
    <tr><td>Mexico City</td><td>18.4</td></tr>
    <tr><td>Dehli</td><td>18</td></tr>
    <tr><td>Osaka</td><td>17.3</td></tr>
    <tr><td>Cairo</td><td>16.8</td></tr>
    <tr><td>Kolkata</td><td>15</td></tr>
    <tr><td>Los Angeles</td><td>14.7</td></tr>
    <tr><td>Shanghai</td><td>14.5</td></tr>
    <tr><td>Moscow</td><td>13.3</td></tr>
    <tr><td>Beijing</td><td>12.8</td></tr>
    <tr><td>Buenos Aires</td><td>12.4</td></tr>
    <tr><td>Guangzhou</td><td>11.8</td></tr>
    <tr><td>Shenzhen</td><td>11.7</td></tr>
    <tr><td>Istanbul</td><td>11.2</td></tr>
  </tbody>
</table>
{% endhighlight %}

The JS:

{% highlight js %}
(function() {
  var $table = $('#chart-example'), $chart = $('#chart-example-chart'), chart;

  // Create a button to toggle our table's visibility.
  // We could just hide it completely if we don't need it.
  $('#toggle-chart-table').click(function(e) {
    e.preventDefault();
    $table.toggle();
  });

  // Set up our Highcharts chart
  chart = new Highcharts.Chart({
    chart: {
      type: 'column',
      renderTo: 'chart-example-chart'
    },
    title: {
      text: 'World\'s largest cities per 2008'
    },
    yAxis: {
      min: 0,
      title: {
        text: 'Population (millions)'
      }
    },
    series: [{
      name: 'Population',
      color: '#006A72'
    }]
  });

  // Create a function to update the chart with the current working set
  // of records from dynatable, after all operations have been run.
  function updateChart() {
    var dynatable = $table.data('dynatable'), categories = [], values = [];
    $.each(dynatable.settings.dataset.records, function() {
      categories.push(this.city);
      values.push(parseFloat(this.population));
    });

    chart.xAxis[0].setCategories(categories);
    chart.series[0].setData(values);
  };

  // Attach dynatable to our table, hide the table,
  // and trigger our update function whenever we interact with it.
  $table
    .dynatable({
      inputs: {
        queryEvent: 'blur change keyup',
        recordCountTarget: $chart,
        paginationLinkTarget: $chart,
        searchTarget: $chart,
        perPageTarget: $chart
      },
      dataset: {
        perPageOptions: [5, 10, 20],
        sortTypes: {
          'population': 'number'
        }
      }
    })
    .hide()
    .bind('dynatable:afterProcess', updateChart);

  // Run our updateChart function for the first time.
  updateChart();
})();
{% endhighlight %}

## Configuration

If you want to change any of the following default configuration options
globally (for all instances of dynatable within your application), you
can call the `$.dynatableSetup()` function to do so:

{% highlight js %}
$.dynatableSetup({
  // your global default options here
});
{% endhighlight %}

For example, this documentation page has `features: { pushState: false}`
so as not to fill your browser's pushState queue as you click around
through made-up data in the examples (except for the first example,
which re-enables it for demo purposes).

The confiuration options (with default values) for dynatable are:

{% highlight js %}
{
  features: {
    paginate: true,
    sort: true,
    pushState: true,
    search: true,
    recordCount: true,
    perPageSelect: true
  },
  table: {
    defaultColumnIdStyle: 'camelCase',
    columns: null,
    headRowSelector: 'thead tr', // or e.g. tr:first-child
    bodyRowSelector: 'tbody tr',
    headRowClass: null
  },
  inputs: {
    queries: null,
    sorts: null,
    multisort: ['ctrlKey', 'shiftKey', 'metaKey'],
    page: null,
    queryEvent: 'blur change',
    recordCountTarget: null,
    recordCountPlacement: 'after',
    paginationLinkTarget: null,
    paginationLinkPlacement: 'after',
    paginationPrev: 'Previous',
    paginationNext: 'Next',
    paginationGap: [1,2,2,1],
    searchTarget: null,
    searchPlacement: 'before',
    perPageTarget: null,
    perPagePlacement: 'before',
    perPageText: 'Show: ',
    recordCountText: 'Showing ',
    processingText: 'Processing...'
  },
  dataset: {
    ajax: false,
    ajaxUrl: null,
    ajaxCache: null,
    ajaxOnLoad: false,
    ajaxMethod: 'GET',
    ajaxDataType: 'json',
    totalRecordCount: null,
    queries: null,
    queryRecordCount: null,
    page: null,
    perPageDefault: 10,
    perPageOptions: [10,20,50,100],
    sorts: null,
    sortsKeys: null,
    sortTypes: {},
    records: null
  },
  // Built-in writer functions,
  // can be overwritten, any additional functions
  // provided in writers will be merged with
  // this default object.
  writers: {
    _rowWriter: defaultRowWriter,
    _cellWriter: defaultCellWriter,
    _attributeWriter: defaultAttributeWriter
  },
  // Built-in reader functions,
  // can be overwritten, any additional functions
  // provided in readers will be merged with
  // this default object.
  readers: {
    _rowReader: null,
    _attributeReader: defaultAttributeReader
  },
  params: {
    dynatable: 'dynatable',
    queries: 'queries',
    sorts: 'sorts',
    page: 'page',
    perPage: 'perPage',
    offset: 'offset',
    records: 'records',
    record: null,
    queryRecordCount: 'queryRecordCount',
    totalRecordCount: 'totalRecordCount'
  }
}
{% endhighlight %}

### Data Attributes

In addition to the configuration options directly available above, some
properties apply specifically to certain columns or elements. Those can
be set using HTML5 data attributes.

<div class="alert alert-block">
Documentation on each data-attribute and what it does coming soon.
</div>

#### On table column headers

<code>data-dynatable-column</code>

<code>data-dynatable-sorts</code>

<code>data-dynatable-no-sort</code>

#### On query inputs

<code>data-dynatable-query-event</code>

<code>data-dynatable-query</code>

## Event Hooks

<table class="table table-bordered responsive-table">
  <thead>
    <tr>
      <th>Event</th>
      <th>Description</th>
      <th>Parameters</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td data-title="Event"><code>dynatable:init</cod></td>
      <td data-title="Description">Run after dynatable is initialized and setup, right before the initial <code>process()</code> is run.</td>
      <td data-title="Parameters"><code>dynatable</code> (attached dynatable instance object)</td>
    </tr>
    <tr>
      <td data-title="Event"><code>dynatable:beforeProcess</cod></td>
      <td data-title="Description">Run at the beginning of <code>process()</code>.</td>
      <td data-title="Parameters"><code>data</code> (the data object containing the settings and records for the <code>process()</code> function)</td>
    </tr>
    <tr>
      <td data-title="Event"><code>dynatable:ajax:success</cod></td>
      <td data-title="Description">Run only if the dynatable instance has <code>dataset.ajax=true</code>, when the AJAX request returns successfully during the <code>process()</code> function.</td>
      <td data-title="Parameters"><code>response</code> (the jqXhr response object)</td>
    </tr>
    <tr>
      <td data-title="Event"><code>dynatable:afterProcess</cod></td>
      <td data-title="Description">Run at the end of the <code>process()</code> function.</td>
      <td data-title="Parameters"><code>data</code> (the data object containing the settings and records for the <code>process()</code> function)</td>
    </tr>
    <tr>
      <td data-title="Event"><code>dynatable:beforeUpdate</cod></td>
      <td data-title="Description">Run right before the DOM is updated with the current record set.</td>
      <td data-title="Parameters"><code>$rows</code> (the set of DOM rows about to be written to the DOM)</td>
    </tr>
    <tr>
      <td data-title="Event"><code>dynatable:afterUpdate</cod></td>
      <td data-title="Description">Run right after the DOM is updated with the current record set.</td>
      <td data-title="Parameters"><code>$rows</code> (the set of DOM rows just written to the DOM)</td>
    </tr>
    <tr>
      <td data-title="Event"><code>dynatable:push</cod></td>
      <td data-title="Description">Run when pushState data is pushed to the window.</td>
      <td data-title="Parameters"><code>data</code> (the data object containing the settings and records to be cached in the pushState cache)</td>
    </tr>
  </tbody>
</table>


## API

You can interface directly with the dynatable API for finer grained
control and greater customization. The internal API is divided into
namespaces. To use the API, just call the namespaced function on the
dynatable object (stored in the `data['dynatable']` attribute of the
element on which dynatable was called).

{% highlight js %}
var dynatable = $('#my-table').data('dynatable');
{% endhighlight %}

For example, to update the dom with the current record set:

{% highlight js %}
dynatable.dom.update();
{% endhighlight %}

<div class="alert alert-block">
Since dynatable is still pre-version-one, the API is still in flux and
may change. Below is a list of the current API functions and arguments
(if any).
</div>

### dom

update

### domColumns

getFromTable

add [$column, position, skipAppend, skipUpdate]

remove [columnIndexOrId]

removeFromTable [columnId]

removeFromArray [index]

generate [$cell]

attachGeneratedAttributes

### records

updateFromJson [data]

sort

paginate

resetOriginal

pageBounds

getFromTable

count

### recordsCount

create

attach

### processingIndicator

create

position

attach

show

hide

### state

push [data]

pop [event]

### sorts

add [attr, direction]

remove [attr]

clear

guessType [a, b, attr]

functions (object)

### sortsHeaders

create [cell]

attach

attachOne [cell]

appendArrowUp [$link]

appendArrorDown [$link]

removeArrow [$link]

removeAllArrows

toggleSort [event, $link, column]

sortedByColumn [$link, column]

sortedByColumnValue [column]

### queries

add [name, value]

remove [name]

run

runSearch [query]

setupInputs

functions (object)

### inputSearch

create

attach

### paginationPage

set [page]

### paginationPerPage

create

attach

set [number]

### paginationLinks

create

attach
