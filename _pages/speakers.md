---
 layout: page
 title: Speakers
 permalink: /speakers/
 description: Our speakers.
 nav: true
 nav_order: 4
 horizontal: false
 ---
 
 <!-- pages/speakers.md -->
 <div class="speakers">
 {% if site.enable_speaker_categories and page.display_categories %}
   <!-- Display categorized speakers -->
   {% for category in page.display_categories %}
   <a id="{{ category }}" href=".#{{ category }}">
     <h2 class="category">{{ category }}</h2>
   </a>
   {% assign categorized_speakers = site.speakers | where: "category", category %}
   {% assign sorted_speakers = categorized_speakers | sort: "importance" %}
   <!-- Generate cards for each speaker -->
   {% if page.horizontal %}
   <div class="container">
     <div class="row row-cols-2">
     {% for speaker in sorted_speakers %}
       {% include speakers_horizontal.liquid %}
     {% endfor %}
     </div>
   </div>
   {% else %}
   <div class="grid">
     {% for speaker in sorted_speakers %}
       {% include speakers.liquid %}
     {% endfor %}
   </div>
   {% endif %}
   {% endfor %}
 
 {% else %}
 
 <!-- Display speakers without categories -->
 
 {% assign sorted_speakers = site.speakers | sort: "importance" %}
 
   <!-- Generate cards for each speaker -->
 
 {% if page.horizontal %}
 
   <div class="container">
     <div class="row row-cols-2">
     {% for speaker in sorted_speakers %}
       {% include speakers_horizontal.liquid %}
     {% endfor %}
     </div>
   </div>
   {% else %}
   <div class="grid">
     {% for speaker in sorted_speakers %}
       {% include speakers.liquid %}
     {% endfor %}
   </div>
   {% endif %}
 {% endif %}
 </div>