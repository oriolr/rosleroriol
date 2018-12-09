<?php
/**
 * The template for displaying the footer
 *
 * Contains the closing of the #content div and all content after.
 *
 * @link https://developer.wordpress.org/themes/basics/template-files/#template-partials
 *
 * @package snowdemon
 */

?>

			</div><!-- #content -->
		</div>
	</div>

	<section class"footer-area full">
	 <div class="main-page">
		<footer id="colophon" class="site-footer">
			<div class=”custom-form”>
				<?php if ( shortcode_exists( 'contact-form-7' ) ) { echo do_shortcode('[contact-form-7 id="39" title="Contact form 1"]'); } ?>
			</div>
				<div class="site-info">
					<a href="<?php echo esc_url( __( 'https://wordpress.org/', 'snowdemon' ) ); ?>">
						<?php
						/* translators: %s: CMS name, i.e. WordPress. */
						printf( esc_html__( 'Proudly powered by %s', 'snowdemon' ), 'WordPress' );
						?>
					</a>
					<span class="sep"> | </span>
						<?php
						/* translators: 1: Theme name, 2: Theme author. */
						printf( esc_html__( 'Theme: %1$s by %2$s.', 'snowdemon' ), 'snowdemon', '<a href="http://underscores.me/">Rosler Oriol</a>' );
						?>
				</div><!-- .site-info -->
		</footer><!-- #colophon -->
	</div>
</div>
</div>


<?php wp_footer(); ?>

</body>
</html>
