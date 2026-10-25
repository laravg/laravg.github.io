---
layout: page
title: EPheClass
description: Machine learning pipeline that classifies disease phenotypes from 16S rRNA microbiome data using dynamic ensembles.
importance: 3
related_publications: true
---

**Problem.** Microbiome data is high-dimensional, sparse and usually comes from small cohorts, which makes it hard to build classifiers that diagnose disease reliably. The goal was to use the oral and gut microbiome to support the diagnosis of conditions such as periodontitis and Crohn's disease.

**What I built.** EPheClass, an end-to-end pipeline for phenotype classification from 16S rRNA amplicon count tables. It has two modules:

- **Data processing:** ASV filtering, train/test split, data augmentation, scaling and feature selection to reduce dimensionality.
- **Training and evaluation:** trains and compares kNN, Random Forest, SVM, XGBoost and MLP models, and combines them into dynamic ensemble models for more robust predictions.

The pipeline is configurable from the command line, so it can be reused on new datasets and phenotypes (e.g. periodontal disease, inflammatory bowel disease or antibiotic exposure).

**Stack.** Python, machine learning (kNN, RF, SVM, XGBoost, MLP, dynamic ensemble selection), pipenv.

**Outcome.** Published in _Frontiers in Bioinformatics_ {% cite vazquezgonzalez2025epheclass %}. An earlier version applied to Crohn's disease was presented at IbPRIA 2023 {% cite vazquezgonzalez2023_chapter_crohn %}.

<a class="btn btn-sm z-depth-0" role="button" href="https://gitlab.citius.gal/lara.vazquez/epheclass" target="_blank" rel="noopener"><i class="fa-brands fa-gitlab"></i> Code</a>
<a class="btn btn-sm z-depth-0" role="button" href="https://doi.org/10.3389/fbinf.2025.1514880" target="_blank" rel="noopener"><i class="fa-solid fa-file-lines"></i> Paper</a>
