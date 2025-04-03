---
layout: about
title: About
permalink: /
subtitle: Workshop at the International Conference on Machine Learning, <a href="https://icml.cc/virtual/2025/workshop/39958">18-19 of July 2025</a>. Vancouver, Canada.

profile:
  align: right
  image: logo_exait.png
  image_circular: false # crops the image to make it circular
    
news: false # includes a list of news items
selected_papers: false # includes a list of papers marked as "selected={true}"
social: false # includes social icons at the bottom of the page

display_categories: [Organizer, Advisor]
display_sponsor_categories: [Silver, Bronze]
speaker_horizontal: true
organizer_horizontal: flase
---

<div style="text-align: justify">
How can we efficiently collect observations that enable effective learning, control, and optimization? This is a key challenge across AI and can be broadly referred to as the problem of exploration. Effective approaches to exploration have driven progress in areas such as robotics, recommender systems, and medical trials. However, as we address larger, more complex applications&mdash;such as drug discovery or language modeling&mdash;the exceptionally large search spaces of such settings render traditional exploration algorithms ineffective.<br><br> 

The Exploration in AI Today Workshop at ICML 2025 will focus on addressing the evolving role of exploration in AI. We will dwell on the question: what is the place of exploration in today's AI landscape and in which settings can exploration algorithms address current open challenges? In particular, we consider the potentially pivotal role that exploration might play in navigating complex and high-dimensional search spaces across real-world applications such as robotics, large language model alignment, and AI for science.
</div>
---

<!-- Speakers -->
<br>
<h1><b>Speakers</b></h1>

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
  {% if page.speaker_horizontal %}
  <div class="container">
    <div class="row row-cols-2">
    {% for speaker in sorted_speakers %}
      {% include speakers_horizontal.liquid %}
    {% endfor %}
    </div>
  </div>
  {% else %}
  <div class="d-flex justify-content-between">
    {% for speaker in sorted_speakers %}
      <div class="p-2">{% include speakers.liquid %}</div>
    {% endfor %}
  </div>
  {% endif %}
  {% endfor %}

{% else %}

<!-- Display speakers without categories -->

{% assign sorted_speakers = site.speakers | sort: "importance" %}

  <!-- Generate cards for each speaker -->

{% if page.speaker_horizontal %}

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


<br>
<!-- Organizers -->
<h1><b>Organizing Team</b></h1>
<p> </p>
<div class="organizers">
{% if site.enable_organizer_categories and page.display_categories %}
  <!-- Display categorized organizers -->
  {% for category in page.display_categories %}
  <a id="{{ category }}" href=".#{{ category }}">
    <h2 class="category">{{ category }}</h2>
  </a>
  {% assign categorized_organizers = site.organizers | where: "category", category %}
  {% assign sorted_organizers = categorized_organizers | sort: "importance" %}
  <!-- Generate cards for each organizer -->
  {% if page.organizer_horizontal %}
  <div class="container">
    <div class="row row-cols-2">
    {% for organizer in sorted_organizers %}
      {% include organizers_horizontal.liquid %}
    {% endfor %}
    </div>
  </div>
  {% else %}
  <div class="grid">
    {% for organizer in sorted_organizers %}
      {% include organizers.liquid %}
    {% endfor %}
  </div>
  {% endif %}
  {% endfor %}

{% else %}

<!-- Display organizers without categories -->

{% assign sorted_organizers = site.organizers | sort: "importance" %}

  <!-- Generate cards for each organizer -->

{% if page.organizer_horizontal %}

  <div class="container">
    <div class="row row-cols-2">
    {% for organizer in sorted_organizers %}
      {% include organizers_horizontal.liquid %}
    {% endfor %}
    </div>
  </div>
  {% else %}
  <div class="grid">
    {% for organizer in sorted_organizers %}
      {% include organizers.liquid %}
    {% endfor %}
  </div>
  {% endif %}
{% endif %}
</div>

<br>
<h1><b>Sponsors</b></h1>

<div class="speakers">
{% for category in page.display_sponsor_categories %}
  <a id="{{ category }}" href=".#{{ category }}">
    <h2 class="category">{{ category }}</h2>
  </a>

  {% assign categorized_sponsors = site.data.sponsors | where: "category", category %}
  {% assign sorted_sponsors = categorized_sponsors | sort: "importance" %}

  <div style="display: flex; flex-wrap: wrap; gap: 2rem; align-items: center; justify-content: center; margin-bottom: 2rem;">
    {% for sponsor in sorted_sponsors %}
      <a href="{{ sponsor.url }}" target="_blank" rel="noopener noreferrer">
        <img src="{{ '/assets/logos/' | append: sponsor.logo | relative_url }}" alt="{{ sponsor.name }}" style="height: 60px;">
      </a>
    {% endfor %}
  </div>
{% endfor %}
</div>

<br>
<h1><b>Contact</b></h1>

You can reach us by email at [``exait@ethz.ch``](mailto:exait@ethz.ch).
