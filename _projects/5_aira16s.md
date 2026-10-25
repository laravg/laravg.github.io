---
layout: page
title: AIRA16S
description: Automated inventory of human 16S rRNA sequencing projects in public databases, integrated into a health data space.
importance: 2
---

**Problem.** Thousands of 16S rRNA sequencing projects are deposited in public repositories such as the NCBI Sequence Read Archive (SRA), but their metadata is unstructured and inconsistent. That makes it hard to find and reuse the right projects for human microbiome studies, for example all projects from a given anatomical site or targeting a specific hypervariable region.

**What I built.** AIRA16S (Automated Inventory of Human 16S rRNA Gene Sequencing Projects in Public Databases), an automated, reproducible pipeline that:

- retrieves human 16S rRNA projects from multiple public sources: NCBI SRA, BioProject, PubMed, PubMed Central and Europe PMC;
- processes and validates them, and enriches their metadata with the anatomical site, the sequenced hypervariable region, the associated scientific publication and quality metrics;
- produces a structured, annotated database that can be queried by biomedical criteria and updated periodically.

Only metadata is stored, not raw sequences. I developed the pipeline and the resulting database at the Galicia Supercomputing Center (CESGA), in collaboration with the microbiome working group at CiTIUS (University of Santiago de Compostela). The database is shared as a use case within a One Health–oriented data space.

**Skills applied.** Data integration from public biomedical APIs and databases, metadata curation and validation, pipeline automation, database design, data spaces.

**Outcome.** A structured and validated database of human 16S rRNA sequencing projects, integrated into the data space and available for querying and advanced analytics.
