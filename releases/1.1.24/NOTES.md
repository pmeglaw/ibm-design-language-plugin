# 1.1.24 candidate - unpublished

The maintained Next.js shell example focuses the visible destination H1 after a
committed route change and on same-route selection; main is the fallback if no
heading is available. Skip links continue to focus main, Escape restores its
invoker, and modifier clicks retain native link behavior. References distinguish
these contracts and defer delayed/streamed content to the product focus manager.

The fixture now checks heading focus and the no-heading fallback. A dedicated
Linux shell CI job runs its complete production-build browser suite. An additional
skip-fragment/history regression confirmed a URL/content mismatch on the original
candidate CI runs. The local repair uses Next.js-integrated History API entries
for ordinary skip activation, preserving main focus, scrolling, query state and
native modified clicks. Back/Forward and repeated skip checks passed in targeted
Chrome observations. The complete automated shell gate remains pending on this
revised candidate; the original failing receipts are preserved.

Targeted CUA checks passed for the revised example at 320px LTR/RTL Gray 100 and 1440px
desktop, with same-route, skip, Escape, fallback and ordinary history checks.
That is example evidence, not a fresh model-generation result or accessibility
certification. The frozen 1.1.23 outputs and evaluation verdicts remain unchanged.

Candidate preparation does not establish publication. Required release/keyboard/
shell browser gates and exact-commit Windows/Linux CI must pass before release.
No tag, public release, marketplace update or installation has occurred.

Candidate preparation also corrects the release fixture TypeScript setup with
`@types/node` 22.18.6 (already pinned by the shell fixture) and explicit Node types.
Existing runtime dependency versions, assertion rules and the Missed control are
unchanged. The original process-type build failure is retained privately.
