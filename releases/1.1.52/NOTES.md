# 1.1.52 Fail-fast evaluator hashing

Unpublished release candidate prepared locally for PR #109. Published 1.1.51
remains the recovery and installation target. This candidate has not been
merged, published or installed.

Reject nonregular hash inputs before opening them. Use nonblocking and binary
open flags where supported, then validate the opened descriptor before reading
its bytes. A POSIX FIFO introduced between the initial check and opening is
rejected without blocking; binary-byte hashing and Windows long-path handling
are preserved.

Add a POSIX regression with a 10-second outer subprocess deadline. It covers an
undeclared generated FIFO alongside a valid declared artifact, failure-receipt
finalization, and replacement during open even when the pathname is restored.
Device-file rejection and binary-byte hashing have direct regression coverage.

Repository CI now runs the synthetic evaluator suite independently on Linux and
Windows, while retaining the release-integrity check. This workflow is outside
the plugin archive. Earlier frozen releases and historical evidence are unchanged.

This fix does not provide a universal deadline for growing regular files or all
filesystem races. Synthetic tests do not establish generated-product quality;
no model evaluation was run for this fix. Required CI must pass on the final
intended release commit before separately authorized publication. Installation
and destination verification remain separate operations.
