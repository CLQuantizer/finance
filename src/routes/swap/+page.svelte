<script>
    import Light from "$lib/components/ui/text/Light.svelte";
    import Xxl from "$lib/components/ui/text/Xxl.svelte";
    import Lg from "$lib/components/ui/text/Lg.svelte";
    import Md from "$lib/components/ui/text/Md.svelte";
    import Ita from "$lib/components/ui/text/Ita.svelte";
</script>

<Xxl>
    Interest Rate Swap
</Xxl >
<div>
    <Md>
        An interest rate swap is a contract where two parties both have interest-bearing assets (securities or loans).
        The two parties exchange the interest payments for this assets over a specified period of time.
    </Md>
    <Md>
        The interest payments are calculated based on a notional principal amount.
        Note that this amount is not exchanged, only the interest payments are exchanged.
    </Md>

    <Ita class="my-2">
        Essentially, the two parties are betting on the future direction of interest rates.
    </Ita>
</div>

<Lg>
    Zero Sum example: Betting on interest rates
</Lg>

<div class="flex-col flex gap-2">
    <div class="lg:pl-6 flex flex-col gap-2">
        <div>
            Imagine two companies:
        </div>
        <Light>
            TechCo: A fast-growing tech company with a $50 million floating-rate loan tied to
            <a class="underline" href="https://www.investopedia.com/terms/l/libor.asp">LIBOR</a>
            + 2%. They are optimistic about their future and expect interest rates to rise.
        </Light>
        <Light>
            StableCo: A mature manufacturing company with a $50 million fixed-rate loan at 5%. They are content with their stable interest rate but are open to exploring options to potentially reduce their interest expense.
        </Light>
        Why Enter the Swap?
        <Light>
            TechCo's Perspective: They believe interest rates will rise, making their floating-rate loan more expensive. By entering a swap where they pay a fixed rate and receive a floating rate, they can essentially convert their loan into a fixed-rate one, locking in their current interest expense and protecting themselves from future rate hikes.
        </Light>
        <Light>
            StableCo's Perspective: They see a potential opportunity to lower their interest expense if interest rates fall. By entering a swap where they pay a floating rate and receive a fixed rate, they can take advantage of any rate decreases, effectively reducing their net interest payments.
        </Light>
        Swap Agreement (a 5-year interest rate swap):
        <Light>
            TechCo pays StableCo a fixed rate of 4.5%.
        </Light>
        <Light>
            StableCo pays TechCo the floating LIBOR + 2%.
        </Light>
        Outcomes:
        <Light>
            Interest Rates Rise: TechCo benefits significantly. Their interest expense remains fixed at 4.5%, while StableCo's payments to them increase as LIBOR rises.
        </Light>
        <Light>
            Interest Rates Fall: StableCo comes out ahead. Their payments to TechCo decrease as LIBOR falls, while they continue to receive the fixed 4.5% from TechCo.
        </Light>
        <Light>
            Interest Rates Stay Flat: Both companies essentially break even. The swap acts as an insurance policy, protecting them from adverse rate movements.
        </Light>
    </div>
</div>

<Lg>
    Real utility example: Pension Funds
</Lg>

<div class="flex-col flex gap-2">
    <div class="lg:pl-6 flex flex-col gap-2">
        <Md>
            The Challenge for Pension Funds
        </Md>
        <Light>
            Long-Term Liabilities: Pension funds have significant long-term obligations to their beneficiaries. These obligations are often sensitive to interest rate fluctuations.
        </Light>
        <Light>
            For example, a pension fund may have to pay out $100 million in benefits to a group of retirees in 20 years.
            The present value of this future liability is affected by current interest rates.
            If the interest rate is 3.8%, then the present value of the liability is approximately $50 million.
        </Light>
        <Light>
            Interest Rate Risk: When interest rates fall, the present value of their future liabilities increases.
            This can create a funding gap, where the fund's assets may not be sufficient to cover its long-term obligations.
        </Light>
        <Light>
            In the same example, if the interest rate suddenly falls to 2%, the present value of the future liability increases to $67.2 million.
            The fund would need to have more assets ($17.2 million more) to cover this increased liability present value.
        </Light>
        So Why Enter the Swap?
        <Light>
            Pension funds use interest rate swaps to hedge against this interest rate risk and manage their liabilities more effectively.
        </Light>
        <Light>
            Pension Fund A enters into a series of interest rate swaps with a bank. They agree to pay a floating rate (e.g., LIBOR)
            and receive a fixed rate (e.g., 4%) on a notional amount of $100 million.
        </Light>
        <Light>
            If interest rates fall, the present value of their liabilities increases,
            but they receive more from the swap to offset this increase.
        </Light>
        <Light>
            If interest rates rise, the present value of their liabilities decreases, but they pay more on the swap.
            However, the decrease in the present value of their liabilities is greater than the increase in their swap payments.
        </Light>
    </div>
</div>