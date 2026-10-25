---
layout: page
title: 16SGOSeq
description: Curated database of 16S rRNA genes and intragenomic variants from the complete genomes of oral bacteria and archaea. Published in Scientific Data.
importance: 2
related_publications: true
---

**Problem.** Bacteria and archaea can carry several copies of the 16S rRNA gene, and those copies are not always identical. This distorts abundance estimates and taxonomic classification in microbiome studies, but there was no curated, oral-specific reference describing gene copy numbers and variants.

**What I built.** The 16S rRNA Gene Oral Sequences database (16SGOSeq):

- **3,192** complete genomes of oral bacteria (3,047 strains, 334 species) and **191** complete genomes of oral archaea (135 species);
- 16S rRNA gene sequences extracted from every genome, with gene copy numbers and intragenomic variants from domain to strain level;
- intragenomic variant divergence computed with BLASTN;
- data released as CSV, XLSX and FASTA, together with a Python script to filter sequences by taxonomy and compute summary statistics.

**Stack.** Python, Biopython, BLAST, GenBank / HOMD data.

**Outcome.** Published as a data descriptor in _Scientific Data_ {% cite vazquezgonzalez2025_scientificdata %}.

<a class="btn btn-sm z-depth-0" role="button" href="https://gitlab.citius.gal/lara.vazquez/16sgoseq" target="_blank" rel="noopener"><i class="fa-brands fa-gitlab"></i> Code &amp; data</a>
<a class="btn btn-sm z-depth-0" role="button" href="https://doi.org/10.1038/s41597-025-05050-4" target="_blank" rel="noopener"><i class="fa-solid fa-file-lines"></i> Paper</a>
