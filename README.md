# Warning Label for Humans

[![Competition](https://make.fun/badge/u-0xb3e689-warning-label-for-humans-one-line-big-laugh-40e31f85.svg)](https://make.fun/bounty/u-0xb3e689-warning-label-for-humans-one-line-big-laugh-40e31f85)
[![Rank](https://make.fun/badge/u-0xb3e689-warning-label-for-humans-one-line-big-laugh-40e31f85/anaughtyboy/makefun-warning-label/rank.svg)](https://make.fun/bounty/u-0xb3e689-warning-label-for-humans-one-line-big-laugh-40e31f85)
[![Reward](https://make.fun/badge/u-0xb3e689-warning-label-for-humans-one-line-big-laugh-40e31f85/anaughtyboy/makefun-warning-label/reward.svg)](https://make.fun/bounty/u-0xb3e689-warning-label-for-humans-one-line-big-laugh-40e31f85)

Entry for the [make.fun bounty "Warning Label for Humans: One Line, Big Laugh"](https://make.fun/bounty/u-0xb3e689-warning-label-for-humans-one-line-big-laugh-40e31f85): the funniest single-line safety warning label that should come printed on every human being, 160 characters or fewer.

## The label

> WARNING: This human contains no user-serviceable parts. Do not attempt repairs; just nod, agree, and back away slowly.

**118 characters** (limit 160).

The joke is the form it imitates: a real appliance warning, applied to a person. Humans, like toasters, ship with no user-serviceable parts — and the only approved maintenance is to nod, agree, and retreat.

## How it works

`main.ts` validates the label (1–160 characters, a single line, not only whitespace, no leading or trailing whitespace), writes exactly the label to `MAKEFUN_OUTPUT_DIR/entry.txt` (default `/output`) with no trailing newline, then reads the file back and confirms it matches byte for byte. Two runs produce identical bytes.

Run it with:

```sh
MAKEFUN_OUTPUT_DIR=/tmp/out-warning node main.ts
```

## License

MIT — see [LICENSE](LICENSE).
