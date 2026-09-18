[CmdletBinding()]
param(
  [Parameter(Mandatory = $true)][string]$ResultsRoot,
  [ValidateSet('Prepare','Run','Score','Report')][string]$Mode = 'Prepare',
  [string]$SkillRoot,
  [string]$Suite,
  [int[]]$Ids,
  [string]$Model,
  [ValidateSet('low','medium','high','xhigh','max','ultra')][string]$Reasoning = 'high',
  [string[]]$ContextFile,
  [string]$Codex = 'codex',
  [ValidateRange(1, 2147483647)][int]$TimeoutSeconds = 600,
  [ValidateRange(1024, 65535)][int]$PreviewPort,
  [int]$CaseId,
  [string]$Review
)
Set-StrictMode -Version Latest
$ErrorActionPreference = 'Stop'
$evalScript = Join-Path $PSScriptRoot 'evaluate.py'
$evalArgs = @($Mode.ToLowerInvariant(), '--results-root', $ResultsRoot)
switch ($Mode) {
  'Prepare' {
    if (-not $Model) { throw 'Prepare requires -Model with an available model ID.' }
    $evalArgs += @('--model', $Model, '--reasoning', $Reasoning, '--timeout-seconds', "$TimeoutSeconds")
    if ($PSBoundParameters.ContainsKey('PreviewPort')) { $evalArgs += @('--preview-port', "$PreviewPort") }
    if ($SkillRoot) { $evalArgs += @('--skill-root', $SkillRoot) }
    if ($Suite) { $evalArgs += @('--suite', $Suite) }
    foreach ($contextPath in $ContextFile) { $evalArgs += @('--context-file', $contextPath) }
    if ($Ids) { $evalArgs += '--ids'; $evalArgs += @($Ids | ForEach-Object { "$_" }) }
  }
  'Run' {
    $evalArgs += @('--codex', $Codex, '--timeout', "$TimeoutSeconds")
    if ($Ids) { $evalArgs += '--ids'; $evalArgs += @($Ids | ForEach-Object { "$_" }) }
  }
  'Score' {
    if ($CaseId -le 0 -or -not $Review) { throw 'Score requires -CaseId and -Review.' }
    $evalArgs += @('--case-id', "$CaseId", '--review', $Review)
  }
}
& python -B -X utf8 $evalScript @evalArgs
exit $LASTEXITCODE
