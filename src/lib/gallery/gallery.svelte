<script>
    import { tick } from 'svelte'
    import { crossfade, fade } from 'svelte/transition'
    import data from './data'
    import keyboard from './useKeyboard'
    let selected = ''
    let gallery
    const [send, receive] = crossfade({
        duration: () => 500,
        fallback: fade,
    })

    const handlePreviewClick = (imageURL) => {
        selected = imageURL
    }

    $: currentIdx = selected
        ? data.findIndex((d) => d.banner_image === selected)
        : -1

    const shortcut = {
        ArrowRight: async (e) => {
            e.preventDefault()
            const nextIdx = (currentIdx + 1) % data.length
            selected = data[nextIdx].banner_image
            await tick()
            const active = gallery.querySelector('[data-selected="true"]')
            if (active) {
                active.scrollIntoView()
            }
        },
        ArrowLeft: async (e) => {
            e.preventDefault()
            const nextIdx =
                currentIdx === 0
                    ? data.length - 1
                    : (currentIdx - 1) % data.length
            selected = data[nextIdx].banner_image
            await tick()
            const active = gallery.querySelector('[data-selected="true"]')
            if (active) {
                active.scrollIntoView()
            }
        },
    }
</script>

<div class="wrapper">
    <div class="gallery-container">
        {#each data as d (d.banner_image)}
            <div>
                {#if d.banner_image !== selected}
                    <div
                        role="img"
                        loading="lazy"
                        aria-label={d.name}
                        out:send={{ key: d.banner_image }}
                        in:receive={{ key: d.banner_image }}
                        on:click={() => handlePreviewClick(d.banner_image)}
                        class="image"
                        style="background-image: url({d.banner_image});"
                    />
                {/if}
            </div>
        {/each}
    </div>
</div>

{#if selected}
    <div
        class="image-viewer"
        on:click={(e) => {
            if (e.target === e.currentTarget) {
                selected = ''
            }
        }}
    >
        <button
            on:click={() => {
                const nextIdx = (currentIdx - 1) % data.length
                selected = data[nextIdx].banner_image
            }}
        >
            Předchozí
        </button>
        <button
            on:click={() => {
                const nextIdx = (currentIdx + 1) % data.length
                selected = data[nextIdx].banner_image
            }}
        >
            Další
        </button>
        <div class="gallery-wrapper">
            <div
                class="close-wrapper"
                on:click={(f) => {
                    selected = ''
                }}
            >
                <span class="close" />
            </div>
            <img
                in:receive={{ key: selected }}
                out:send={{ key: selected }}
                src={selected}
                alt={data[currentIdx].name}
                class="shadow-2xl rounded-md mb-1"
            />
            <div
                aria-label="圖片檢視器，可用鍵盤左右鍵導覽"
                role="group"
                bind:this={gallery}
                use:keyboard={{ shortcut }}
                class="gallery"
                tabindex={0}
            >
                {#each data as d (d.name)}
                    <div
                        role="img"
                        out:send={{ key: d.banner_image }}
                        in:receive={{ key: d.banner_image }}
                        aria-label={d.name}
                        data-selected={selected === d.banner_image}
                        class:active={selected === d.banner_image}
                        on:click={() => (selected = d.banner_image)}
                        class="image rounded-md shadow-2xl"
                        style="background-image:url({d.banner_image})"
                    />
                {/each}
            </div>
        </div>
    </div>
{/if}
<p class="visually-hidden" aria-atomic={true} aria-live="assertive">
    {#if data[currentIdx]}
        Current Image Name: {data[currentIdx].name}
    {/if}
</p>

<style lang="sass">
	.gallery-container 
		display: grid
		grid-template-columns: repeat(3, 1fr)
		grid-gap: 5px

		@include down('sm')
			& :nth-child(n+4)
				display: none

	.visually-hidden 
		visibility: hidden

	.image 
		width: 100%
		margin: 0 auto
		aspect-ratio: 1/1
		background: center / cover no-repeat
		transition: ease transform .3s
		cursor: pointer

	.gallery-wrapper 
		position: absolute
		top: 40%
		left: 50%
		transform: translate(-50%, -40%) 
		max-width: 1200px
		width: 80%
		margin: 0 auto

		@include down('sm')
			width: 90%

		.close-wrapper
			opacity: 0
			animation: fade-in 1s forwards
			animation-delay: .5s
			position: absolute
			right: 20px
			top: 20px

			@include down('sm')
				top: 10px
				right: 10px

		.close
			position: relative
			display: block
			width: 50px
			height: 50px
			border-radius: 50%
			background: white
			transition: ease transform .3s
			cursor: pointer

			&:hover
				transform: scale(1.1)

			&:after
				position: absolute
				top: 50%
				left: 15px
				transform: translateY(-50%) rotate(45deg)
				content: ''
				display: block
				width: 20px
				height: 2px
				background: black
			
			&:before
				position: absolute
				top: 50%
				left: 15px
				transform: translateY(-50%) rotate(-45deg)
				content: ''
				display: block
				width: 20px
				height: 2px
				background: black
		
			@include down('sm')
				transform: scale(0.7)

				&:hover
					transform: scale(0.7)

	.gallery-wrapper img 
		max-height: 535px
		aspect-ratio: 2/1
		width: 100%
		object-fit: cover

	.gallery 
		position: relative
		display: flex
		flex-wrap: nowrap
		gap: 5px
		width: 100%
		height: 100%
		justify-content: space-between

	.image-viewer 
		position: fixed
		left: 50%
		width: 100%
		height: 100%
		left: 0
		bottom: 0
		right: 0
		top: 0
		transition: ease background-color .3s, ease backdrop-filter .3s
		backdrop-filter: blur(10px)
		background-color: rgba(255, 255, 255, 0.5)

	.active
		border-radius: 0.375rem
		transform: translateY(-15px)

		@include down('sm')
		transform: translateY(-10px)

	@keyframes fade-in
		from 
			opacity: 0
		
		to 
			opacity: 1
    

</style>
