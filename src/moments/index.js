import moments from "./moments.json"
import bazBattles from "./bazBattles.json"
import historiaCivilis from "./historiaCivilis.json"
import historyMarche from "./historyMarche.json"
import kingsAndGenerals from "./kingsAndGenerals.json"

// combines all the moments together from different creators
export default [
  ...moments,
  ...bazBattles,
  ...historiaCivilis,
  ...historyMarche,
  ...kingsAndGenerals
]
