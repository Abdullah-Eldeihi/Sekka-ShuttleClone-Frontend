import { AbilityBuilder } from "@casl/ability";

module.exports = function updateAbility(user) {
  const { can, rules } = new AbilityBuilder();

  if (user.role === "admin") {
    can("manage", "all");
  } else {
    can("read", "all");
  }

  this.$ability.update(rules);
};
