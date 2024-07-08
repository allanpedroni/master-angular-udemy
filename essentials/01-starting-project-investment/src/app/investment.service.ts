import { Injectable, signal } from "@angular/core"
import { InvestmentInput, InvestmentResult } from "./investiments.model";

@Injectable({
  providedIn: 'root'
})
export class InvestmentService {

  resultsData = signal<InvestmentResult[] | undefined>(undefined);

  onCalculateInvestmentResults(data: InvestmentInput) {

    const { initialInvestment, annualInvestment, expectedReturn, duration } = data;

    const annualData: InvestmentResult[] = [];

    let investmentValue = initialInvestment;

    for (let i = 0; i < duration; i++) {
      const year = i + 1;
      const interestEarnedInYear = investmentValue * (expectedReturn / 100);
      investmentValue += interestEarnedInYear + annualInvestment;
      const totalInterest =
        investmentValue - annualInvestment * year - initialInvestment;
      annualData.push({
        year: year,
        interest: interestEarnedInYear,
        valueEndOfYear: investmentValue,
        annualInvestment: annualInvestment,
        totalInterest: totalInterest,
        totalAmountInvested: initialInvestment + annualInvestment * year,
      });
    }

    this.resultsData.set(annualData);

    console.log(annualData);
  }
}
