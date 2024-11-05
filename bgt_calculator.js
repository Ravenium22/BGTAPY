const readline = require('readline');

class BGTCalculator {
  constructor() {
    this.tvl = 0;
    this.stakedPercentage = 0;
    this.userSharePercentage = 0;
    this.yearlyBGTDistribution = 0;
    this.gaugeCaptureRate = 0;
  }

  async getUserInputs() {
    console.log("\n=== BGT Rewards Calculator ===\n");

    const rl = readline.createInterface({
      input: process.stdin,
      output: process.stdout
    });

    this.tvl = parseFloat(await this.ask("Enter HONEY-USDC TVL (in USD): "));
    this.stakedPercentage = parseFloat(await this.ask("Enter Staked in Gauge Vault percentage (e.g., 32.89): "));
    this.userSharePercentage = parseFloat(await this.ask("Enter your total shares percentage (e.g., 0.50): "));
    this.yearlyBGTDistribution = parseFloat(await this.ask("Enter estimated yearly BGT distribution: "));
    this.gaugeCaptureRate = parseFloat(await this.ask("Enter HONEY-USDC Gauge Vault BGT Capture rate percentage (e.g., 18): "));

    rl.close();
  }

  ask(question) {
    const rl = readline.createInterface({
      input: process.stdin,
      output: process.stdout
    });

    return new Promise(resolve => rl.question(question, ans => {
      rl.close();
      resolve(ans);
    }));
  }

  calculateRewards() {
    // ... (rest of the code remains the same)
  }

  displayResults(results) {
    // ... (rest of the code remains the same)
  }
}

async function main() {
  const calculator = new BGTCalculator();
  await calculator.getUserInputs();
  const results = calculator.calculateRewards();
  calculator.displayResults(results);
}

main();
