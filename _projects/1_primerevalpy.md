---
layout: page
title: PrimerEvalPy
description: Python package for in-silico evaluation of primers against any sequence database. Published in BMC Bioinformatics.
importance: 1
related_publications: true
---

**Problem.** Microbiome studies based on 16S rRNA amplicon sequencing depend heavily on the choice of primers: a poorly matched primer pair can miss entire taxonomic groups. Researchers needed a flexible way to test how well any primer, or primer pair, covers the organisms they care about before running costly experiments.

**What I built.** PrimerEvalPy, a Python package that evaluates the performance of any primer or primer pair against any sequencing database. It:

- calculates coverage metrics, also broken down by taxonomic level;
- returns the predicted amplicon sequences, with their average start and end positions;
- supports both individual primers and primer pairs, with Mothur-style `.oligos` input.

I designed and developed the tool as part of my PhD.

**Stack.** Python, Biopython, pipenv.

**Outcome.** Published in _BMC Bioinformatics_ {% cite vazquezgonzalez2024_primerevalpy %} and released as open source under the MIT licence.

<a class="btn btn-sm z-depth-0" role="button" href="https://gitlab.citius.gal/lara.vazquez/PrimerEvalPy" target="_blank" rel="noopener"><i class="fa-brands fa-gitlab"></i> Code</a>
<a class="btn btn-sm z-depth-0" role="button" href="https://doi.org/10.1186/s12859-024-05805-7" target="_blank" rel="noopener"><i class="fa-solid fa-file-lines"></i> Paper</a>
