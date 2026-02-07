---
layout: page
permalink: /repositories/
title: repositories
description:
nav: true
nav_order: 4
---

<link rel="stylesheet" href="{{ '/assets/css/repositories.css' | relative_url }}">


{% if site.data.repositories.github_users %}

## GitHub users

<div class="repo-grid">
  {% for user in site.data.repositories.github_users %}
    {% include repository/repo_user.liquid username=user %}
  {% endfor %}
</div>

---

{% if site.repo_trophies.enabled %}
{% for user in site.data.repositories.github_users %}
{% if site.data.repositories.github_users.size > 1 %}

  <h4>{{ user }}</h4>
{% endif %}
  <div class="repo-grid">
    {% include repository/repo_trophies.liquid username=user %}
  </div>

---

{% endfor %}
{% endif %}
{% endif %}

{% if site.data.repositories.gitlab_repos %}

<!---
## GitLab Repositories
-->

<div class="repo-grid">
  {% for repo in site.data.repositories.gitlab_repos %}
    {% include repository/repo.liquid repository=repo %}
  {% endfor %}
</div>

{% endif %}

{% if site.data.repositories.github_repos %}

<!---
## GitHub Repositories
-->
<div class="repo-grid">
  {% for repo in site.data.repositories.github_repos %}
    {% include repository/repo.liquid repository=repo %}
  {% endfor %}
</div>

{% endif %}
