---
layout: about
title: About
permalink: /
subtitle: Workshop at the International Conference on Machine Learning, <a href="https://icml.cc/virtual/2024/workshop/29964">Saturday, the 19 of July 2025</a>. Vancouver, Canada.

news: false # includes a list of news items
selected_papers: false # includes a list of papers marked as "selected={true}"
social: false # includes social icons at the bottom of the page

display_categories: [organizer, advisor]
speaker_horizontal: true
organizer_horizontal: flase
---

<div style="text-align: justify">
How can we efficiently collect observations for optimization, control, and generalization? This is a key challenge in AI and is known as the exploration problem. Effective exploration has driven progress in areas such as robotics, recommender systems, and scheduled medical trials. However, as we address larger, more complex applications---such as drug discovery or language modeling---the exceptionally large search spaces render traditional exploration algorithms ineffective. As a result, recent breakthroughs in AI have come not from traditional exploration algorithms, but largely from training large foundation models on diverse corpora of pre-existing, curated datasets. Despite this, we have witnessed sparks showing that exploration, when done right, can compensate for data and computation---for example, in the training of DeepSeek-R1---suggesting that exploration can still play a key role in AI today.
</div>
---

<!-- Speakers -->
<br>
<h1><b>Speakers</b></h1>
We are happy have the following speakers.
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
<h1><b>Organizers and advisors</b></h1>
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